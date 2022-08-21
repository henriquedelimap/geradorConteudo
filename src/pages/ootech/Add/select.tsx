import { SelectChangeEvent, Stack } from "@mui/material"
import { useState } from "react"
import { SelectFilter } from "../../../components/Seletores"
import { area } from "../../lapsoo"

export const SelectAdd = () => {
    const [toggleValue, setToggleValue] = useState('')
    const [areaToggleValue, setAreaToggleValue] = useState('')

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