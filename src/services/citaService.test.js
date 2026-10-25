import { describe, it, expect, beforeEach } from 'vitest'
import { listarCitas, crearCita, cambiarEstado } from './citaService'

const cita = {
  mascota: 'Firulais', especie: 'Perro', servicio: 'Consulta general',
  fecha: '2026-11-10', hora: '10:00',
}

describe('citaService', () => {
  beforeEach(() => localStorage.clear())

  it('parte sin citas', () => {
    expect(listarCitas()).toEqual([])
  })

  it('crea una cita en estado Pendiente', () => {
    const nueva = crearCita(cita)
    expect(nueva.estado).toBe('Pendiente')
    expect(listarCitas().length).toBe(1)
  })

  it('rechaza una cita en un horario ocupado', () => {
    crearCita(cita)
    expect(() => crearCita(cita)).toThrow('ocupado')
  })

  it('cambia el estado de una cita', () => {
    const nueva = crearCita(cita)
    const resultado = cambiarEstado(nueva.id, 'Confirmada')
    expect(resultado.estado).toBe('Confirmada')
  })
})