import { useMutation, useQuery } from "@apollo/client"
import {
    Modal,
    Stack,
    FormControl,
    OutlinedInput,
    Button,
    Typography,
    CircularProgress,
    Box,
    IconButton
} from "@mui/material"
import { Dispatch, SetStateAction, useContext, useState } from "react"
import { MdClose } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { SIGN_IN } from "../../../API/SIGNIN/signin"
import {
    LapsooLogo,
    OOLogo
} from "../../../OOTECHNOLOGY"
import { AuthContext, IAuthContext } from "../../common/Context/User"

interface Props {
    openLogin: boolean
    setOpenLogin: Dispatch<SetStateAction<boolean>>
}

export const Login = (props: Props) => {
    const { openLogin, setOpenLogin } = props
    const [signIn, { loading, error, data }] = useMutation(SIGN_IN)
    const [inUsername, setInUsername] = useState('')
    const [inPassword, setInPassword] = useState('')
    const navigate = useNavigate()


    const { authenticated, login } = useContext(AuthContext) as IAuthContext

    return (
        <Modal
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            open={openLogin}
            onClose={() => setOpenLogin(false)}>
            <Box sx={{
                height: '100%',
                width: '100%',
                background: 'rgba(232, 245, 255, 0.4)',
                backdropFilter: 'blur(32px)',
            }} >
                <Stack alignItems='end' sx={{ p: { xs: 1, md: 4, lg: 4 } }}>
                    <IconButton onClick={() => setOpenLogin(false)} >
                        <MdClose />
                    </IconButton>
                </Stack>

                <Stack
                    alignItems='center'
                    justifyContent='space-between'
                    sx={{
                        height: '80%',
                        width: '100%',
                        pt: 10.8,
                    }}
                >
                    <LapsooLogo />


                    {!!loading ? ''
                        : <Stack
                            spacing={2}
                        >
                            {!!error ? error.message : ''}
                            <FormControl id='user'>
                                <OutlinedInput id='user' onChange={(e) => setInUsername(e.target.value)} size='small' />
                            </FormControl>

                            <FormControl id='pass'>
                                <OutlinedInput id='pass' type='password' onChange={(e) => setInPassword(e.target.value)} size='small' />
                            </FormControl>
                            <Button onClick={(e) => {
                                e.preventDefault()
                                signIn({
                                    variables: {
                                        username: inUsername,
                                        password: inPassword
                                    }
                                })
                                login(data.signIn.token)
                                localStorage.setItem("user", JSON.stringify(data.signIn.token))
                            }}
                            >
                                <Typography>
                                    acessar
                                </Typography>
                            </Button >

                        </Stack>
                    }
                    <OOLogo />
                </Stack>
            </Box>

        </Modal >
    )
} 