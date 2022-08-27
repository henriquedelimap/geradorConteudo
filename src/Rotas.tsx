
import { useMutation } from '@apollo/client';
import { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SIGN_IN } from './API/SIGNIN/signin';
import { AuthContext } from './pages/common/Context/User';
import { LapsooPage } from './pages/lapsoo'
import { OOTechPage } from './pages/ootech'


export function Rotas() {
  const [user, setUser] = useState<string | null>()
  const [userAuth, setUserAuth] = useState(false)
  const [signIn, { loading, error, data }] = useMutation(SIGN_IN)

  const login = (inUsername?: string, inPassword?: string) => {
    console.log(signIn);
    signIn({
      variables: {
        username: inUsername,
        password: inPassword
      }
    })
    localStorage.setItem("user", JSON.stringify(data.signIn.token))
    let auth = !!localStorage.getItem('user') ? localStorage.getItem('user') : data

    setUserAuth(!!auth)
  }
  useEffect(() => {
    setUserAuth(!!localStorage.getItem('user'))
  }, [!!localStorage.getItem('user')])
  const logout = () => {

  }


  return (
    <Router>
      <AuthContext.Provider value={{ authenticated: userAuth, user, login, logout }}>

        <Routes>
          <Route index element={<LapsooPage />} />
          <Route path='*' element={<LapsooPage />} />
          <Route path='/adm' element={userAuth
            ? <OOTechPage />
            : <LapsooPage />} />

        </Routes>
      </AuthContext.Provider>
    </Router>
  )
}