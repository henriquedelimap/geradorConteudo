import { Autocomplete, AutocompleteProps, SelectChangeEvent, Stack, TextField } from "@mui/material"
import { useState, Dispatch, SetStateAction, useEffect } from "react"
import { SelectFilter } from "../../../components/Seletores"

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
export const SelectAdd = (props: Props) => {
    const [novoTema, setNovoTema] = useState('')


    const [inputValue, setInputValue] = useState('');
    const [valueTema, setValueTema] = useState<string | null>();
    const [inputValueTema, setInputValueTema] = useState('');

    const { areas,
        itemXarea,
        temas,
        itemXtema,
        toggleValue,
        setToggleValue,
        areaToggleValue,
        setAreaToggleValue } = props
    const area: string[] = []

    const options = areas.map(item => {
        return {

            label: item
        }
    })
    useEffect(() => {

    }, [novoTema])



    function handleChange(newValue: SetStateAction<string>) {
        setToggleValue(newValue)
    }
    function handleChangeArea(newValue: SetStateAction<string>) {
        setAreaToggleValue(newValue)
    }
    return (
        <>


            <Autocomplete
                value={areaToggleValue}

                onChange={(event, newValue: any) => {
                    setAreaToggleValue(newValue?.label as string);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                size='small'
                id="combo-box-demo"
                sx={{ width: '6rem' }}

                options={options}
                freeSolo
                renderInput={(params) => <TextField {...params} label="ii" />}
            />
            <div>

                <Autocomplete
                    disablePortal
                    id="combo-box-demo"

                    size='small'

                    value={toggleValue}

                    onChange={(event, newValue: any) => setToggleValue(newValue.label as string)}
                    inputValue={inputValueTema}
                    onInputChange={(event, newInputValue) => {
                        setInputValueTema(newInputValue);
                    }}


                    options={options}
                    freeSolo
                    sx={{ width: '6rem' }}
                    renderInput={(params) => <TextField {...params} label="ii" />}
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