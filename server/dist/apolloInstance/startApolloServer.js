import express from "express";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
//initialize datasource
// This function initializes the data source and starts the Apollo server.
export async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    app.use(express.json());
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();
    app.use('/graphql', expressMiddleware(server, { context: async () => ({}) }));
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
    console.log(`Server Running at http://localhost:4000/graphql`);
}
