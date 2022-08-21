import { DocumentNode, gql, OperationVariables, TypedDocumentNode, useQuery } from "@apollo/client";


export const GET_FRASES = gql`
   query Frases {
    frases {
        quote
    }
}
`

export function Query(getFrases: DocumentNode) {
    const { loading, error, data } = useQuery(getFrases)
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>erro :/</p>
    }
    console.log(data, "visitando aqui o dado");

    return data
}