
import { useMutation } from '@apollo/client';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SIGN_IN } from './API/SIGNIN/signin';
import { LapsooPage } from './pages/lapsoo'
import { OOTechPage } from './pages/ootech'


export function Rotas() {


  return (
    <Router>
      <Routes>
        <Route index element={<LapsooPage />} />
        <Route path='*' element={<LapsooPage />} />
        <Route path='/adm' element={!!localStorage.getItem("user")
          ? <OOTechPage />
          : <LapsooPage />} />

      </Routes>
    </Router>
  )
}