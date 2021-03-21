import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      base_experience
      species{
        name
      }
      sprites{
        front_default
      }
      types {
        type {
          name
        }
      }
      moves{
        move {
          name
        }
      }
      message
      status
    }
  }
`;