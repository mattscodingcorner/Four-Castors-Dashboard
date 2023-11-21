const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Location {
    _id: ID
    locationName: String
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    locations: [Location]
  }

  type Query {
    profiles: [Profile]
    profile(_id: ID!): Profile
    locations: [Location]
    location(_id: ID!): Location
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Profile
    addLocation(locationName: String!): Location
  }
`;

module.exports = typeDefs;




// original typeDefs below:

//   type Profile {
//     _id: ID
//     name: String
//     email: String
//     password: String
//     locations: [String]!
//   }

//   type Auth {
//     token: ID!
//     profile: Profile
//   }

//   type Query {
//     profiles: [Profile]!
//     profile(profileId: ID!): Profile
//     # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
//     me: Profile
//   }

//   type Mutation {
//     addProfile(name: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth

//     addLocation(profileId: ID!, location: String!): Profile
//     removeProfile: Profile
//     removeLocation(location: String!): Profile
//   }
// `;