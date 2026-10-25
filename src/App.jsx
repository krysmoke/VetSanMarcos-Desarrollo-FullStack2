import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import AdminServicios from './pages/AdminServicios'
import SolicitarCita from './pages/SolicitarCita'
import CitaConfirmada from './pages/CitaConfirmada'
import CitaNoAgendada from './pages/CitaNoAgendada'
import MisCitas from './pages/MisCitas'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/solicitar-cita" element={<SolicitarCita />} />
      <Route path="/cita-confirmada" element={<CitaConfirmada />} />
      <Route path="/cita-no-agendada" element={<CitaNoAgendada />} />
      <Route path="/mis-citas" element={<MisCitas />} />
      <Route path="/admin/servicios" element={<AdminServicios />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App