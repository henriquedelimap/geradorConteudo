import { useMutation } from "@apollo/client";
import { Children, createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../../API/SIGNIN/signin";
export interface IAuthContext {
    authenticated: boolean
    user: any
    logout?: () => void
    setUserAuth?: Dispatch<SetStateAction<boolean>>
    login?: any
    userAuth?: boolean

}
export const AuthContext = createContext<IAuthContext | undefined>(undefined)

interface Prop {
    children: ReactNode
}
export const AuthProvider = (prop: Prop) => {
    const [user, setUser] = useState<any | null>(null)

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user }}>
            {prop.children}
        </AuthContext.Provider>
    )
}



export const useUserContext = () => {
    const [userAuth, setUserAuth] = useState<any>()
    const [signIn, { error, loading, data }] = useMutation(SIGN_IN, {
        onCompleted() {
            if (localStorage.getItem('user') !== 'undefined') window.location.reload()
        }
    })



    const login = (inUsername?: string, inPassword?: string) => {

        signIn({
            variables: {
                username: inUsername,
                password: inPassword
            }
        })

        console.log(data?.signIn.token);
        if (!!!error) {
            localStorage.setItem('user', data?.signIn.token)
        }
    }

    useEffect(() => {
        localStorage.getItem('user') === 'undefined' ? setUserAuth(false) : localStorage.getItem('user') === null ? setUserAuth(false) : setUserAuth(true)
    }, [])
    const logout = () => {

    }

    return {
        userAuth, login, logout, error
    }
}
