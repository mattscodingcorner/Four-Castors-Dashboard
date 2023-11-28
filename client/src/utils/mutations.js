import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_LOCATION = gql`
  mutation addLocation($profileId: ID!, $location: [String]!) {
    addLocation(profileId: $profileId, location: $location) {
      _id
      name
      locations
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_LOCATION = gql`
  mutation removeLocation($location: String!) {
    removeLocation(location: $location) {
      _id
      name
      locations
    }
  }
`;
