import { 
    FastifyRequest,
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyPluginAsync, 
    FastifyReply
  } from 'fastify';
import { CreateOrderSchema, Order } from '../../../models/Order';

  const Routes: FastifyPluginAsync = async (fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> => {
    fastify.post<{Body: Order}>('/create', CreateOrderSchema, (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const data = request.body as Order
            return reply.status(201).send({data})
        } catch (error) {
            request.log.error(error);
            return reply.send(500);
        }
    })
  }

  export default Routes;