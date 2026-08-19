import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainLayout from './shared/layouts/MainLayout'

import Registration from './modules/registration/Registration'
import Login from './modules/login/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
         
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

