import { 
    FastifyRequest,
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyPluginAsync, 
    FastifyReply
  } from 'fastify';
import { eventBridge } from '../../../lib/event-bridge-client';
import { CreateOrderSchema, Order } from '../../../models/Order';
import { PutEventsCommand, PutEventsRequest } from "@aws-sdk/client-eventbridge";

  const Routes: FastifyPluginAsync = async (fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> => {
    fastify.post<{Body: Order}>('/create', CreateOrderSchema, async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const data = request.body as Order
            const eventRequest: PutEventsRequest = {
                Entries: [
                    {
                        Detail: JSON.stringify(data),
                        DetailType: 'order',
                        Source: 'app.orderManager.com'
                    }
                ]
            }

            const response = await eventBridge.send(new PutEventsCommand(eventRequest));
            request.log.info("Success, event sent; requestID:", response);
            return reply.status(201).send({data})
        } catch (error) {
            request.log.error(error);
            return reply.status(500).send(JSON.stringify(error));
        }
    })
  }

  export default Routes;