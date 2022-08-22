import { gql, useMutation } from '@apollo/client'
import { CircularProgress, IconButton } from "@mui/material"
import { Dispatch, SetStateAction } from 'react'
import { MdAdd } from "react-icons/md"
import { ADD_FRASE } from "../../../API/POST/post"
import { filtros } from '../../../Data'

interface Props {
    inputValue: string
    toggleValue: string
    areaToggleValue: string
    setEnvio: Dispatch<SetStateAction<boolean>>
}
export const BtnAdd = (props: Props) => {
    const { inputValue, toggleValue, areaToggleValue, setEnvio } = props

    const [mutateFunction, { data, loading, error }] = useMutation(ADD_FRASE)

    const validaValores = (areaToggleValue: string, toggleValue: string, inputValue: string) => {

        areaToggleValue === '' && toggleValue === '' && inputValue === '' ? "error"
            : mutateFunction({
                variables: {
                    area: areaToggleValue,
                    tema: toggleValue,
                    quote: inputValue
                }
            })
    }
    if (loading) return <CircularProgress />
    if (error) return <p>erro :/</p>
    if (!!data) return <IconButton
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

    // const adiciona = () => {
    //     const filt = filtros.marketing.map(item => item.quotes.map(frase => mutateFunction({
    //         variables: {
    //             area: 'marketing',
    //             tema: 'marketing digital',
    //             quote: frase
    //         }
    //     }
    //     )))
    //     console.log(filt);

    // }
    return (
        <IconButton
            onClick={() => {
                // adiciona()
                mutateFunction({
                    variables: {
                        area: areaToggleValue,
                        tema: toggleValue,
                        quote: inputValue
                    }
                })
            }}
            sx={{ height: 44 }}>
            <MdAdd />
        </IconButton>
    )
}