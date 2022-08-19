import  Fastify from "fastify";
import Pino from "pino";
import AppRoutes from "./app";

const server = Fastify({
    logger: Pino({ level: 'info' })
});

server.register(AppRoutes)
const start = async () => {
    try {
        await server.listen({port: 7000});
        console.log('Server started successfully');
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();