

const gql = require('apollo-server-express').gql;
const ApolloServer = require('apollo-server-express').ApolloServer;
const Todo = require("../models").Todo;

const typeDefs = gql`
    type Todo {
        id: ID
        title: String
        description: String        
    }

    type Query {
        getTodo: [Todo]
    }

    type Mutation {
        addTodo(title: String, description: String): Todo
    }
`

// Provide resolver functions for your schema fields
const resolvers = {    
    Query: {
        getTodo: async () => {
            const todos = await Todo.findAll()
            return todos
        },
    },

    Mutation: {
        addTodo: async (_, args) => {
            const todo = await Todo.create(args);
            return todo;
        }
    }
  };
  
  const server = new ApolloServer({ typeDefs, resolvers });

  module.exports = server;

