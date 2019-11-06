const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
require("dotenv/config");
const Item = require("./schemas/dataSchema");

// Connect to database
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(con => {
    Item.find((err, res) => {
      if (err) return console.log("err");
      // Define types for each field
      const typeDefs = `
  type Query {
    all: [Items!]!
  }

  type Collections {
    collections: Items!
  }

  type Items {
    title: String!
    routeName: String!
    items: [Item!]!
  }

  type Item {
    id: Int!
    name: String!
    imageUrl: String!
    price: Int!
  }
`;
      // All resolvers in GraphQL server
      const resolvers = {
        Query: {
          all: () => Object.values(res[0].collections)
        }
      };

      // Use Graphql-yoga class to create a server
      const server = new GraphQLServer({ typeDefs, resolvers });
      server.start(() => console.log("Server is running on localhost:4000"));
    });
  })
  .catch(err => {
    console.log(err);
  });
