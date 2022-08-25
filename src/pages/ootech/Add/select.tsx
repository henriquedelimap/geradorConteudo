import { useQuery } from "@apollo/client"
import { Autocomplete, AutocompleteProps, SelectChangeEvent, Stack, TextField } from "@mui/material"
import { useState, Dispatch, SetStateAction, useEffect, SyntheticEvent } from "react"
import { GET_FRASES } from "../../../API/GET/get"
import { SelectFilter } from "../../../components/Seletores"
import { IFrase } from "../../../Type"
import { filtraReapetidos } from "../../common"

interface Props {
    toggleValue: string
    setToggleValue: Dispatch<SetStateAction<string>>
    areaToggleValue: string
    setAreaToggleValue: Dispatch<SetStateAction<string>>
    areas: string[]
    itemXarea: any
    temas: string[]
    itemXtema: any
}
interface IChange {
    event: Event | undefined
    newValue: any
}
export const SelectAdd = (props: Props) => {
    const [novoTema, setNovoTema] = useState('')


    const [inputValue, setInputValue] = useState('');
    const [valueTema, setValueTema] = useState<string | null>();
    const [inputValueTema, setInputValueTema] = useState('');

    const {
        itemXtema,
        toggleValue,
        setToggleValue,
        areaToggleValue,
        setAreaToggleValue } = props
    const area: string[] = []


    const { loading, error, data } = useQuery(GET_FRASES)

    let areas = filtraReapetidos(data?.frases?.map((item: IFrase) => item.area))
    let itemXarea = data?.frases?.map((item: IFrase) => item.area === areaToggleValue ? item : '').filter((i: any) => i)

    let temas = filtraReapetidos(itemXarea?.map((item: IFrase) => item.tema))


    const optionsAreas = areas?.map(item => {
        return {

            label: item
        }
    })
    const optionsTemas = temas?.map(item => {
        return {
            label: item
        }
    })

    function handleChange(newValue: SetStateAction<string>) {
        setToggleValue(newValue)
    }
    function handleChangeArea(newValue: SetStateAction<string>) {
        setAreaToggleValue(newValue)
    }
    console.log(temas);

    return (
        <>


            <div>
                <Autocomplete
                    value={areaToggleValue}

                    // onChange={(event, newValue) => setAreaToggleValue(newValue as string)}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        setAreaToggleValue(newInputValue)
                        setInputValue(newInputValue);
                    }}
                    size='small'
                    id="combo-box-demo"
                    sx={{ width: '6rem' }}

                    options={optionsAreas}
                    freeSolo
                    renderInput={(params) => <TextField {...params} label="área" />}
                />

            </div>
            <div>

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"

                    size='small'

                    value={toggleValue}

                    // onChange={(event, newValue) => setToggleValue(newValue as string)}
                    inputValue={inputValueTema}
                    onInputChange={(event, newInputValue) => {
                        setToggleValue(newInputValue)
                        setInputValueTema(newInputValue);
                    }}


                    options={optionsTemas}
                    freeSolo
                    sx={{ width: '6rem' }}
                    renderInput={(params) => <TextField {...params} label="tema" />}
                />

            </div>
            {/* <SelectFilter
                toggleValue={areaToggleValue}
                handleChange={handleChangeArea}
                filtros={area}
                selectLabel={'área'} />
            <SelectFilter
                toggleValue={toggleValue}
                handleChange={handleChange}
                filtros={area}
                selectLabel={'tema'} /> */}
        </>
    )
}