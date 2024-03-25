//apollo instance server
import { ApolloServer } from 'apollo-server';


//mock schema
const typeDefs =`
    type Query{
        hello: String
    }
`;

//mock resolver
const resolvers = {
    Query: {
        hello: () => 'Hello World!',
    },
};

//our server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

