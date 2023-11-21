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