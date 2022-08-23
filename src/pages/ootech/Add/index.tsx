import { Grid, Stack } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { BtnAdd } from "./buttom"
import { InAdd } from "./input"
import { SelectAdd } from "./select"
interface Props {
    setEnvio: Dispatch<SetStateAction<boolean>>
    envio: boolean
}
export const AddForm = (props: Props) => {

    const { envio, setEnvio } = props
    const [inputValue, setInputValue] = useState('')
    const [toggleValue, setToggleValue] = useState('')
    const [areaToggleValue, setAreaToggleValue] = useState('')

    return (

        <Stack
            direction='row'
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
            <SelectAdd toggleValue={toggleValue} setToggleValue={setToggleValue} areaToggleValue={areaToggleValue} setAreaToggleValue={setAreaToggleValue} />
            <InAdd inputValue={inputValue} setInputValue={setInputValue} />
            <BtnAdd setEnvio={setEnvio} inputValue={inputValue} toggleValue={toggleValue} areaToggleValue={areaToggleValue} />
        </Stack>
    )
}