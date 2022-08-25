import { gql } from "@apollo/client";



export const UPDATE_FRASE = gql`


mutation UpdateFrase(
    $myId: String!, 
    $frase: FraseInput!
    ) {
    updateFrase(
        myId: $myId, 
        frase: $frase
    ) {
        quote
  }
}
`