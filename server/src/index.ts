import { AppDataSource } from './data-source.js';
import "reflect-metadata";
import { startApolloServer } from './apolloInstance/startApolloServer.js';
import { resolvers } from './resolvers/resolvers.js';
import { typeDefs } from './schema/typeDefs.js';


// Main function to initialize everything.
async function main() {
    console.log(process.cwd());
    try {
        await AppDataSource.initialize();
        console.log("Connected to DB");
        await startApolloServer(typeDefs, resolvers); // Properly await this function.
    } catch (err) {
        console.log(`Error connecting to DB: ${err}`);
    }
}

main()


