import { gql, useMutation } from '@apollo/client'

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

export const Mutation = () => {
    const [mutateFunction, { data, loading, error }] = useMutation(ADD_FRASE)
    if (loading) return <p>Loading...</p>
    if (error) return <p>erro :/{error.message}</p>
    return mutateFunction
}