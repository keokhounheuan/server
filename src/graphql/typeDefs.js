const {gql} = require('apollo-server-express');

const typeDefs = gql`
   
type User{
    id: ID!
    name: String!
    age: Int!
    email:String!
    nationlity: Nationlity!
    frinds: [ User ]
    favoriteMovies: [ Movie ]
}


type Post {
    id: ID!
    title: String
    description: String
}

type Movie {
    id : ID!
    name: String!
    yearofPublication: Int!
    
}

type Query {

    getAllPosts: [Post]

    Users : [User!]!
    user (id : ID!) : [User!]!

    movies: [Movie!]!
    movie(name : String!) : [Movie!]!
}
input createUserInput {
    name: String!
    age: Int!
    email:String!
    nationlity: Nationlity = CANADA
    
}

input UpdatenameInput {
    id: ID!
    newname: String!
   
    
}
type Mutation {
    createUser(input : createUserInput!): User

    Updatename(input : UpdatenameInput!):User
    
    deleteUser(id: ID!):User
}






input PostInput {
    title: String
    description: String

}

type Mutation1 {
    createPost(Post: PostInput): Post

}
enum Nationlity{
    CANADA
    BRAZIL
    INDIA
    THAI
    LAOS
}
`;
module.exports = typeDefs;