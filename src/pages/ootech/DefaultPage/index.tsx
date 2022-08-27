import { Outlet, useNavigate } from "react-router-dom"
import { MdLogout } from 'react-icons/md'
import { Fab, Box } from "@mui/material"

export const DefaultPageOOTech = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ width: '100vw', minHeight: '100vh', position: 'relative' }}>
            <Outlet />

            <Fab onClick={() => {
                localStorage.removeItem('user')
                navigate('/')
            }} color='error' size='small' sx={{ position: 'fixed', bottom: 16, right: 16 }} >
                <MdLogout fontSize={18} />
            </Fab>
        </ Box>
    )
}