import styled from "@emotion/styled"
import { Stack, Typography } from "@mui/material"


export const OOLogo = () => {
    return (
        <Typography fontWeight={200} fontFamily='Outfit' variant={'h6'}>

        <Stack sx={{ width: '100%' }} direction='row' justifyContent="center" alignItems='center'>
            <Azul>oo</Azul><Vermelho>tech</Vermelho>nology
        </Stack>
        </Typography>
    )
}

export const LapsooLogo = () => {
    return (
        <Typography fontFamily='Outfit' variant={'h4'} fontWeight={500}>
            <Stack sx={{ width: '100%' }} direction='row' justifyContent="center" alignItems='center'>

                Laps<AzulLapsoo>oo</AzulLapsoo>
            </Stack>
        </Typography>
    )
}

const Azul = styled('p')(({ }) => ({
    color: '#0066cc',
    letterSpacing: -2.4,
    paddingRight: 2.4
}))
const Vermelho = styled('p')(({ }) => ({
    color: '#cc0000'
}))
const AzulLapsoo = styled('p')(({ }) => ({
    color: '#0066cc',
    letterSpacing: -6.4,
    paddingRight: 2.4
}))