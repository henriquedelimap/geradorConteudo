import { Paper, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { BsListNested, BsCalendarPlus } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

export const OOTechHome = () => {
    const navigate = useNavigate()
    return (
        <Stack direction='row' spacing={2} alignItems='center' justifyContent='center' sx={{ width: '100vw', height: '100vh' }} >
            <Paper onClick={() => navigate('/adm/frases')} sx={{ width: { xs: "40%", md: "32%", lg: "32%" }, height: "40%", display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
                <BsListNested fontSize={32} />
                <Typography fontFamily='Outfit' fontWeight={200} variant='h5'>criar frase</Typography>
            </Paper>
            <Paper onClick={() => navigate('/adm/calendarios')} sx={{ width: { xs: "40%", md: "32%", lg: "32%" }, height: "40%", display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
                <BsCalendarPlus fontSize={32} />
                <Typography fontFamily='Outfit' fontWeight={200} variant='h5'>criar calendário</Typography>


            </Paper>
        </Stack >
    )
}