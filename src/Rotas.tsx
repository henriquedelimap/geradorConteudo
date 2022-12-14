
import { useMutation } from '@apollo/client';
import { Component, ReactNode, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SIGN_IN } from './API/SIGNIN/signin';
import { AuthProvider, useUserContext } from './common/Context/User';
import { LapsooPage } from './pages/lapsoo'
import { OOTechPage } from './pages/ootech'


export function Rotas() {
  const { userAuth } = useUserContext()
  return (
    <Router>
      <AuthProvider>

        <Routes>
          <Route index element={<LapsooPage />} />
          <Route path='*' element={<LapsooPage />} />

          <Route path='adm/*' element={userAuth ? <OOTechPage /> : <LapsooPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}