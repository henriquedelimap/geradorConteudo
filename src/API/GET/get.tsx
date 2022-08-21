import { DocumentNode, gql, OperationVariables, TypedDocumentNode, useQuery } from "@apollo/client";


export const GET_FRASES = gql`
   query {
    frases {
        id
        area
        quote
        tema
    }
}
`

export function Query(getFrases: any) {
    const { loading, error, data } = useQuery(getFrases)
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>erro :/</p>
    }

    return data
}