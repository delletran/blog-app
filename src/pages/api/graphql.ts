import { ApolloServer } from "apollo-server-micro";
import Cors from 'micro-cors'

// import typeDefs from "graphql/schema";
// import resolvers from "graphql/resolvers";
import { schema } from 'graphql/nexusSchema'
import { createContext } from "graphql/context";

const cors = Cors();
const apolloServer = new ApolloServer({
  schema,
  // typeDefs,
  // resolvers,
  context: createContext
});

const server = apolloServer.start()



export default cors( 
  async function app(req, res) {
    await server
    const handler = apolloServer.createHandler({
      path: '/api/graphql',
    })(req, res)

    if (req.method === 'OPTIONS') {
      res.end();
      return false;
    }
    
    await handler
  }
)

export const config = {
  api: {
    bodyParser: false,
  }
}

