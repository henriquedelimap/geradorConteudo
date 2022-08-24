import { SelectChangeEvent, Stack } from "@mui/material"
import { useState, Dispatch, SetStateAction } from "react"
import { SelectFilter } from "../../../components/Seletores"

interface Props {
    toggleValue: string
    setToggleValue: Dispatch<SetStateAction<string>>
    areaToggleValue: string
    setAreaToggleValue: Dispatch<SetStateAction<string>>
}
export const SelectAdd = (props: Props) => {
    const { toggleValue, setToggleValue, areaToggleValue, setAreaToggleValue } = props
    const area: string[] = []

    function handleChange(event: SelectChangeEvent) {
        setToggleValue(event.target.value as string)
    }
    function handleChangeArea(event: SelectChangeEvent) {
        setAreaToggleValue(event.target.value as string)
    }
    return (
        <>

            <SelectFilter
                toggleValue={areaToggleValue}
                handleChange={handleChangeArea}
                filtros={area}
                selectLabel={'área'} />
            <SelectFilter
                toggleValue={toggleValue}
                handleChange={handleChange}
                filtros={area}
                selectLabel={'tema'} />
        </>
    )
}