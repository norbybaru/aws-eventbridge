import AutoLoad, {AutoloadPluginOptions} from '@fastify/autoload'
import {FastifyPluginAsync} from 'fastify'
import {join} from 'path'
import { Context, APIGatewayEvent } from 'aws-lambda';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

declare module 'fastify' {
    interface FastifyRequest {
        awsLambda: {
            event: APIGatewayEvent,
            context: Context
        }
    }
}
const app: FastifyPluginAsync<AppOptions> = async (fastify, opts): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'routes'),
    options: opts
  })
}

export default app
export {app}