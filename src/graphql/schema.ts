import { gql } from "apollo-server-micro";

const typeDefs = gql`

  type Query {
    users: [User]
    profiles: [Profile]!
    blogs: [Blog]!
  }

  type Blog {
    id: Int!
    title: String
    category: String
    description: String
    published: String
    createdAt: String
    updatedAt: String
    tags: [String]
    author: User
  }
  
  type User {
    user_id: Int!
    username: String!
    fullname: String
    email: String
    first_name: String
    last_name: String
    password: String
    password2: String
    createdAt: String
    updatedAt: String
    role: Role
    blogs: [Blog]
    profiles: [Profile]
  }

  type Profile {
    profile_id: Int!
    bio: String
    user_id: String
    user: User!
  }

  enum Role {
    ADMIN
    USER
  }
`

export default typeDefs;