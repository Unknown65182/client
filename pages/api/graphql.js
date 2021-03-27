import { ApolloServer, gql } from "apollo-server-micro";
import typeDefs from "../../src/graphql/schema.graphql";
import resolvers from "../../src/graphql/resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

async function start(req, res) {
    return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
  }

export default start;
