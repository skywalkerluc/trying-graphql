const { GraphQLServer } = require('graphql-yoga');

// schema goes here
// "!" stands for not null
const typeDefs = `
    type Query {
        info: String!
    }`

// implementation
const resolvers = { 
    Query: { 
        info: () => `This is an GraphQL API`
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))