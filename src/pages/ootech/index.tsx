import { Routes, Route } from "react-router-dom"
import { CAlendariosPage } from "./Calendarios"
import { FrasesPage } from "./Frases"
import { OOTechHome } from "./Home"

export const OOTechPage = () => {

  return (
    <Routes>
      <Route index element={<OOTechHome />} />
      <Route path='frases' element={<FrasesPage />} />
      <Route path='calendarios' element={<CAlendariosPage />} />

    </Routes>
  )
}