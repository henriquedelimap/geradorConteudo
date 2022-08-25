import { Grid, Stack } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { BtnAdd } from "./buttom"
import { InAdd } from "./input"
import { SelectAdd } from "./select"
interface Props {
    setEnvio: Dispatch<SetStateAction<boolean>>
    envio: boolean,
    total: any
    areas: string[]
    itemXarea: any
    temas: string[]
    itemXtema: any
    toggleValue: string
    setToggleValue: Dispatch<SetStateAction<string>>
    areaToggleValue: string
    setAreaToggleValue: Dispatch<SetStateAction<string>>
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
}
export const AddForm = (props: Props) => {

    const {
        envio,
        setEnvio,
        total,
        areas,
        itemXarea,
        temas,
        itemXtema,
        toggleValue,
        setToggleValue,
        areaToggleValue,
        setAreaToggleValue,
        inputValue,
        setInputValue
    } = props


    return (

        <Stack
            direction={{ xs: 'column', md: 'row', lg: 'row' }}
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                width: '100%',
                p: 4,
                pb: 2,
                pt: 2,
                background: 'rgba(232, 245, 255, 0.07)',
                backdropFilter: 'blur(32px)',
                boxShadow: '0px 12px 8px -20px #111111'
            }}
            spacing={2}
        >
            <SelectAdd areas={areas} itemXarea={itemXarea} temas={temas} itemXtema={itemXtema} toggleValue={toggleValue} setToggleValue={setToggleValue} areaToggleValue={areaToggleValue} setAreaToggleValue={setAreaToggleValue} />
            <Stack direction='row'>

                <InAdd inputValue={inputValue} setInputValue={setInputValue} />
                <BtnAdd setEnvio={setEnvio} inputValue={inputValue} toggleValue={toggleValue} areaToggleValue={areaToggleValue} />
            </Stack>
        </Stack>
    )
}