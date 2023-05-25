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
import { postgresDataSource } from './data-source';
import { CocktailResolver } from './resolvers/cocktail';
import { GlassResolver } from './resolvers/glass';
import { HelloResolver } from './resolvers/hello';

interface MyContext {
  token?: string;
}

const main = async () => {
  await postgresDataSource
    .initialize()
    // eslint-disable-next-line no-console
    .then(() => console.log('Data Source has been initialized!'))
    .catch((err) =>
      // eslint-disable-next-line no-console
      console.error('Error during Data Source Initialization:', err)
    );

  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    schema: await buildSchema({
      resolvers: [HelloResolver, CocktailResolver, GlassResolver],
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
