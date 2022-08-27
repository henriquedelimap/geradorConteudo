import { createContext, ReactNode, useContext, useState } from "react";
export interface IAuthContext {
    authenticated: boolean
    user: any
    logout: () => void
    login: any
    userAuth?: boolean

}
export const AuthContext = createContext<IAuthContext | undefined>(undefined)
