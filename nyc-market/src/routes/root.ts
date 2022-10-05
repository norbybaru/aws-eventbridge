import { 
  FastifyRequest,
  FastifyInstance, 
  FastifyPluginOptions, 
  FastifyPluginAsync, 
  FastifyReply
} from 'fastify';

import { saveItem } from '../lib/dynamodb-client';
const Routes: FastifyPluginAsync = async (fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> => {
  fastify.get('/', {}, async (request: FastifyRequest, reply: FastifyReply) => {
      try {
          const event = request.awsLambda.event as any;
          request.log.info('NYC DLQ Function handler received event')
          request.log.info(event);
          
          const eventPayload = JSON.parse(event.Records[0].body)

          request.log.info('saving item on dynamoDB');
          await saveItem(eventPayload);
          
          return reply.status(200);
      } catch (error) {
          request.log.error(error);
          return reply.status(500).send(JSON.stringify(error));
      }
  })
}

export default Routes;