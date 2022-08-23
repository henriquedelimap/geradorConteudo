import { gql } from "@apollo/client";



export const DELETE_FRASE = gql` 
    mutation RemoveFrase($myId: String!) {
    removeFrase(myId: $myId) {
        myId
    }
    }

`