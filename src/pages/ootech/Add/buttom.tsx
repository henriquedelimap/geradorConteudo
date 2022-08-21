import { gql, useMutation } from '@apollo/client'
import { IconButton } from "@mui/material"
import { MdAdd } from "react-icons/md"
import { Mutation, ADD_FRASE } from "../../../API/POST/post"

interface Props {
    inputValue: string
    toggleValue: string
    areaToggleValue: string
}
export const BtnAdd = (props: Props) => {
    const { inputValue, toggleValue, areaToggleValue } = props

    const [mutateFunction, { data, loading, error }] = useMutation(ADD_FRASE)
    if (loading) return <p>Loading...</p>
    if (error) return <p>erro :/</p>
    return (
        <IconButton
            onClick={() => mutateFunction({
                variables: {
                    area: areaToggleValue,
                    tema: toggleValue,
                    quote: inputValue
                }
            })}
            sx={{ height: 44 }}>
            <MdAdd />
        </IconButton>
    )
}