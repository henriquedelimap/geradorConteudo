import { Box, LinearProgress, Stack } from "@mui/material"
import { ReactNode } from "react"
import { LapsooLogo } from "../../OOTECHNOLOGY"

interface Prop {
    children: any
}
export const Loading = (prop: Prop) => {
    return <Stack sx={{ overflow: 'hidden' }}>
        <Stack sx={{ width: '100%' }} alignSelf='start'>
            <LinearProgress />
        </Stack>
        <Stack direction='column' alignItems='center' justifyContent='center' sx={{ width: '100vw', height: '98vh' }}>
            {prop.children}
        </Stack>
    </Stack>
}