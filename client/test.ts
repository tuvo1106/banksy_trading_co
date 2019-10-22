import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, gql } from "apollo-boost";

const http = createHttpLink({
  uri: "https://banksyco.tk/"
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: http,
  cache
});

client
  .query({
    query: gql`
      {
        all {
          id
          title
          routeName
          items {
            id
            imageUrl
            price
          }
        }
      }
    `
  })
  .then(res => console.log(res));
