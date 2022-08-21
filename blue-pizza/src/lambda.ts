const awsLambdaFastify = require("@fastify/aws-lambda");
import fastify from "fastify";
import app from "./app";

const server = fastify({
  logger: true,
});
server.register(app);

const proxy = awsLambdaFastify(server);

exports.handler = proxy;