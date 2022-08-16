import styled from "@emotion/styled"
import { Stack } from "@mui/material"


export const OOLogo = () => {
    return (
        <Stack sx={{ width: '100%' }} direction='row' justifyContent="center" alignItems='center'>
            <Azul>oo</Azul><Vermelho>tech</Vermelho>nology
        </Stack>
    )
}

const Azul = styled('p')(({})=>({
    color: '#0066cc',
    letterSpacing: -2.4,
    paddingRight: 2.4
}))
const Vermelho = styled('p')(({})=>({
color: '#cc0000'
}))