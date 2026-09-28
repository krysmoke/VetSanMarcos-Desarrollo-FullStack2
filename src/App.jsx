import { Routes, Route } from 'react-router-dom'
import Servicios from './pages/Servicios'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App