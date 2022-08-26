import { useMutation, useQuery } from "@apollo/client"
import {
    Modal,
    Stack,
    FormControl,
    OutlinedInput,
    Button,
    Typography
} from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SIGN_IN } from "../../../API/SIGNIN/signin"
import {
    LapsooLogo,
    OOLogo
} from "../../../OOTECHNOLOGY"

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

    return (
        <Modal
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            open={openLogin}
            onClose={() => setOpenLogin(!openLogin)}>
            <Stack
                alignItems='center'
                justifyContent='space-between'
                sx={{
                    height: '100%',
                    width: { xs: '70%', md: '40%', lg: '40%' },
                    pb: 5,
                    pt: 10.8,
                    background: 'rgba(232, 245, 255, 0.41)',
                    backdropFilter: 'blur(8px)',
                }}
            >
                <LapsooLogo />


                {!!loading ? ''
                    : <Stack
                        spacing={2}
                    >
                        {!!error ? error.message : ''} <FormControl>
                            <OutlinedInput onChange={(e) => setInUsername(e.target.value)} size='small' />
                        </FormControl>

                        <FormControl>
                            <OutlinedInput onChange={(e) => setInPassword(e.target.value)} size='small' />
                        </FormControl>
                        <Button onClick={() => {
                            signIn({
                                variables: {
                                    username: inUsername,
                                    password: inPassword
                                }
                            })
                            if (!!data) {
                                return localStorage.setItem("user", JSON.stringify(data.signIn.token))
                            }
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

        </Modal>
    )
} 