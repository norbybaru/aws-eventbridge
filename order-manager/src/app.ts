import { 
    FastifyRequest,
    FastifyInstance, 
    FastifyPluginOptions, 
    FastifyPluginAsync, 
    FastifyReply
  } from 'fastify';

  const AppRoutes: FastifyPluginAsync = async (fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> => {
    fastify.get('/health-check', {}, (request: FastifyRequest, reply: FastifyReply) => {
        try {
            return reply.send({status: 'ok', timestamp: new Date().toISOString()})
        } catch (error) {
            request.log.error(error);
            return reply.send(500);
        }
    })
  }

  export default AppRoutes;