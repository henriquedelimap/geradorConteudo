import { FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { useState, Dispatch, SetStateAction } from "react"

interface Props {
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
}
export const InAdd = (props: Props) => {
    const { inputValue, setInputValue } = props
    return (
        <FormControl sx={{ height: 44, width: '100%' }}>
            <InputLabel size='small' >frase</InputLabel>
            <OutlinedInput
                label="frase"
                size='small'
                onChange={(e) => setInputValue(e.target.value)}
            />
        </FormControl>
    )
}