import { gql } from '@apollo/client'

export const ADD_FRASE = gql`
  mutation addFrase(
    $area: String!,
    $tema: String!, 
    $quote: String!,
    $myId: String!    
  ) {
      addFrase (
    frase: {
      area: $area,
      tema: $tema, 
      quote: $quote,
      myId: $myId 
    }
  ) {
    area
    tema
    quote
  }
  }
`