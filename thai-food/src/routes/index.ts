import { 
    FastifyRequest,
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyPluginAsync, 
    FastifyReply
  } from 'fastify';

  const Routes: FastifyPluginAsync = async (fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> => {
    fastify.get('/', {}, (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const event = request.awsLambda.event;
            request.log.info('thai food received order event')
            request.log.info(event);
        } catch (error) {
            request.log.error(error);
            return reply.status(500).send(JSON.stringify(error));
        }
    })
  }

  export default Routes;