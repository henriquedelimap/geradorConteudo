import { Box, LinearProgress, Stack } from "@mui/material"
import { ReactNode } from "react"
import { LapsooLogo } from "../../OOTECHNOLOGY"

interface Prop {
    children: any
}
export const Loading = (prop: Prop) => {
    return <>
        <Box sx={{ width: '100vw' }} alignSelf='start'>
            <LinearProgress />
        </Box>
        <Stack direction='column' alignItems='center' justifyContent='center' sx={{ width: '100vw', height: '100vh' }}>
            {prop.children}
        </Stack>
    </>
}