import { gql, useMutation } from '@apollo/client'
import { CircularProgress, IconButton } from "@mui/material"
import { Dispatch, SetStateAction } from 'react'
import { MdAdd } from "react-icons/md"
import { GET_FRASES } from '../../../API/GET/get'
import { ADD_FRASE } from "../../../API/POST/post"
import { filtros } from '../../../Data'
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
            // update(cache, { data: { createFrase } }) {

            //     const { frases } = cache.readQuery({ query: GET_FRASES })

            //     cache.writeQuery({
            //         query: GET_FRASES,
            //         data: {
            //             frases: frases?.concat(createFrase)
            //         }
            //     })
            // }
        }
    )

    const validaValores = (areaToggleValue: string, toggleValue: string, inputValue: string) => {

        areaToggleValue === '' && toggleValue === '' && inputValue === '' ? "error"
            : createFrase({
                variables: {
                    area: areaToggleValue,
                    tema: toggleValue,
                    quote: inputValue,
                    myId: Id(areaToggleValue, toggleValue, inputValue)
                }
            })
    }
    if (loading) return <CircularProgress />
    if (error) return <p>erro :/</p>
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

    const adiciona = () => {
        // console.log(filtros.imobiliaria.map(item => item.quotes))

        // const filt = filtros.imobiliaria.map(item => item.quotes.map(frase => createFrase({
        //     variables: {
        //         area: 'imobiliaria',
        //         tema: item.tema,
        //         quote: frase,
        //         myId: Id('marketing', 'marketing digital', frase)
        //     }
        // }
        // )))
        // console.log(filt);
    }
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