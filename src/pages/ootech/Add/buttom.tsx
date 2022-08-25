import { gql, useMutation } from '@apollo/client'
import { CircularProgress, IconButton } from "@mui/material"
import { Dispatch, SetStateAction } from 'react'
import { MdAdd } from "react-icons/md"
import { GET_FRASES } from '../../../API/GET/get'
import { ADD_FRASE } from "../../../API/POST/post"
import { IFrase } from '../../../Type'
import { Id } from '../../../Utils'
interface Props {
    inputValue: string
    toggleValue: string
    areaToggleValue: string
    setEnvio: Dispatch<SetStateAction<boolean>>
}


export const BtnAdd = (props: Props) => {
    const { inputValue, toggleValue, areaToggleValue, setEnvio } = props
    const [createFrase, { data, loading, error }] = useMutation(ADD_FRASE,
        {
            refetchQueries: [
                { query: GET_FRASES },
                'Frases'
            ]
        }
    )

    if (loading) return <CircularProgress />
    if (error) return <p>erro :/{error.message}</p>
    if (!!data) return <IconButton
        onClick={() => {
            setEnvio(!!data)
            createFrase({
                variables: {
                    area: areaToggleValue,
                    tema: toggleValue,
                    quote: inputValue,
                    myId: Id(areaToggleValue, toggleValue, inputValue)
                }
            })
        }}
        sx={{ height: 44 }}>
        <MdAdd />
    </IconButton>


    return (
        <IconButton
            onClick={() => {

                // adiciona()
                createFrase({
                    variables: {
                        area: areaToggleValue,
                        tema: toggleValue,
                        quote: inputValue,
                        myId: Id(areaToggleValue, toggleValue, inputValue)
                    }
                })
            }}
            sx={{ height: 44 }}>
            <MdAdd />
        </IconButton>
    )
}