const { GraphQLServer } = require('graphql-yoga');

// schema goes here
// "!" stands for not null
const typeDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    }
    
    type Link {
        id: ID!
        description: String!
        url: String!
    }`



// implementation
let links = [
    {
        id: 'link-0',
        url: 'www.howtographql.com',
        description: 'Fullstack tutorial for GraphQL'
    },
    {
        id: 'link-1',
        url: 'www.google.com',
        description: 'Google'
    }
]

const resolvers = { 
    Query: { 
        info: () => `This is an GraphQL API`,
        feed: () => links
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url
    }
}




const server = new GraphQLServer({
    typeDefs,
    resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))