import { Grid, Stack } from "@mui/material"
import { BtnAdd } from "./buttom"
import { InAdd } from "./input"
import { SelectAdd } from "./select"

export const AddForm = () => {
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


            <SelectAdd />

            <InAdd />

            <BtnAdd />
        </Stack>
    )
}