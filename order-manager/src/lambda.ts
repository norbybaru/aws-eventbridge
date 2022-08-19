import awsLambdaFastify from '@fastify/aws-lambda'
import  Fastify from "fastify";
import Pino from "pino";
import app from './app';

const server = Fastify({
    logger: Pino({ level: 'info' })
});

server.register(app);

const lambda = awsLambdaFastify(server);
export const handler = lambda;