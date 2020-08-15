require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({});
server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
