import * as dotenv from 'dotenv';
import 'reflect-metadata';
dotenv.config();

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

interface MyContext {
  token?: string;
}

const main = async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  await server.start();

  app.use(cors());

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        token: req.headers.token,
        dishLoader: req,
      }),
    })
  );
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve)
  );
  // eslint-disable-next-line no-console
  console.log('🚀 Server ready at http://localhost:4000/graphql');
};

main();
