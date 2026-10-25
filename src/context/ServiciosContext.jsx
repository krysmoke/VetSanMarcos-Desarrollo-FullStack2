import { createContext, useContext, useState } from 'react'
import * as servicioService from '../services/servicioService'

const ServiciosContext = createContext(null)

export function ServiciosProvider({ children }) {
  const [servicios, setServicios] = useState(() => servicioService.listar())

  const refrescar = () => setServicios(servicioService.listar())

  const crearServicio = (servicio) => {
    servicioService.crear(servicio)
    refrescar()
  }

  const actualizarServicio = (codigo, cambios) => {
    servicioService.actualizar(codigo, cambios)
    refrescar()
  }

  const eliminarServicio = (codigo) => {
    servicioService.eliminar(codigo)
    refrescar()
  }

  return (
    <ServiciosContext.Provider
      value={{ servicios, crearServicio, actualizarServicio, eliminarServicio }}
    >
      {children}
    </ServiciosContext.Provider>
  )
}

export function useServicios() {
  const contexto = useContext(ServiciosContext)
  if (!contexto) throw new Error('useServicios debe usarse dentro de ServiciosProvider')
  return contexto
}