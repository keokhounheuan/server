
const { ApolloServer, gql } = require('apollo-server-express');
 const express = require('express');
 const http = require('http');
 const typeDefs = require('./graphql/typeDefs');
 const resolvers = require('./graphql/resolvers');
 const mongoose = require('mongoose');

const port = process.env.PORT || 4000



async function startApolloServer(){
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));

    await mongoose.connect('mongodb://localhost:27017/post_db', {
       useUnifiedTopology: true,
       useNewUrlParser: true, 
    });
    console.log('mongodb connect...');
  
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer();
