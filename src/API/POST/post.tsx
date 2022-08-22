import { gql } from '@apollo/client'

export const ADD_FRASE = gql`
  mutation addFrase(
    $area: String!,
    $tema: String!, 
    $quote: String!,    
  ) {
      addFrase (
    frase: {
      area: $area,
      tema: $tema, 
      quote: $quote, 
    }
  ) {
    area
    tema
    quote
  }
  }
`