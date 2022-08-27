import { Paper, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { BsListNested, BsCalendarPlus } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

export const OOTechHome = () => {
    const navigate = useNavigate()
    return (
        <Stack direction='row' spacing={2} alignItems='center' justifyContent='center' sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }} >
            <Paper
                onClick={() => navigate('/adm/frases')}
                sx={{
                    cursor: 'pointer',
                    width: { xs: "45%", md: "32%", lg: "32%" },
                    height: "40%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    border: '1px solid transparent',
                    '&:hover': {
                        border: '1px solid #0066cc',
                        color: '#0066cc'
                    }
                }}>
                <BsListNested fontSize={32} />
                <Typography fontFamily='Outfit' fontWeight={200} variant='h5'>criar frase</Typography>
            </Paper>
            <Paper
                onClick={() => navigate('/adm/calendarios')}
                sx={{
                    cursor: 'pointer',
                    width: { xs: "45%", md: "32%", lg: "32%" },
                    height: "40%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column',
                    border: '1px solid transparent',
                    '&:hover': {
                        border: '1px solid #0066cc',
                        color: '#0066cc'
                    }
                }}>
                <BsCalendarPlus fontSize={32} />
                <Typography fontFamily='Outfit' fontWeight={200} variant='h5'>criar calendário</Typography>


            </Paper>
        </Stack >
    )
}