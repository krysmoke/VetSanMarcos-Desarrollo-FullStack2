import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TarjetaServicio from './TarjetaServicio'

const servicio = {
  codigo: 'SV001', categoria: 'Consultas', nombre: 'Consulta general',
  especie: 'Perro', duracion: '30 min', precio: 15000, observaciones: '',
}

describe('TarjetaServicio', () => {
  it('muestra el nombre y la especie', () => {
    render(<TarjetaServicio servicio={servicio} />)
    expect(screen.getByText('Consulta general')).toBeInTheDocument()
    expect(screen.getByText('Perro')).toBeInTheDocument()
  })

  it('muestra el precio formateado', () => {
    render(<TarjetaServicio servicio={servicio} />)
    expect(screen.getByText(/15\.000/)).toBeInTheDocument()
  })
})