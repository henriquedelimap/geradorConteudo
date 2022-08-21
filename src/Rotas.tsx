
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LapsooPage } from './pages/lapsoo'
import { OOTechPage } from './pages/ootech'

export function Rotas() {


  return (
    <Router>
      <Routes>
        <Route index element={<LapsooPage />} />
        <Route path='/adm' element={<OOTechPage />} />
      </Routes>
    </Router>
  )
}