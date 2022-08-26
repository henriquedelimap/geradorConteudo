
import { useMutation } from '@apollo/client';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SIGN_IN } from './API/SIGNIN/signin';
import { LapsooPage } from './pages/lapsoo'
import { OOTechPage } from './pages/ootech'


// const PrivateRoute = ({ element, ...rest }) => {
//   const [signIn, { loading, error, data }] = useMutation(SIGN_IN)

//   return (

//     <Route {...rest} element={
//       !!data ?
//         { element }
//         : <Route path='/' element={<LapsooPage />} />
//     } />
//   );
// };
// export type ProtectedRouteProps = {
//   isAuthenticated: boolean;
//   authenticationPath: string;
//   outlet: JSX.Element;
// };

// export default function ProtectedRoute({ isAuthenticated, outlet }: ProtectedRouteProps) {
//   if () {
//     return outlet;
//   } else {
//     return <Navigate to={{ pathname: '/' }} />;
//   }
// };
// const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
//   isAuthenticated: !!sessionContext.isAuthenticated,
//   authenticationPath: '/login',
// };
console.log(localStorage.getItem("user"));


export function Rotas() {


  return (
    <Router>
      <Routes>
        <Route index element={<LapsooPage />} />
        {!!localStorage.getItem("user")
          ? <Route path='adm' element={<OOTechPage />} />
          : <Route path='*' element={<LapsooPage />}

      </Routes>
    </Router>
  )
}