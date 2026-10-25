import { describe, it, expect, beforeEach } from 'vitest'
import { listar, obtener, crear, actualizar, eliminar } from './servicioService'

const nuevo = {
  codigo: 'ZZ001', categoria: 'Otros', nombre: 'Servicio de prueba',
  especie: 'Perro', duracion: '30 min', precio: 5000, observaciones: '',
}

describe('servicioService', () => {
  beforeEach(() => localStorage.clear())

  it('lista los servicios iniciales', () => {
    expect(listar().length).toBeGreaterThan(0)
  })

  it('obtiene un servicio por código', () => {
    const primero = listar()[0]
    expect(obtener(primero.codigo)).toEqual(primero)
  })

  it('devuelve null si el código no existe', () => {
    expect(obtener('NOEXISTE')).toBeNull()
  })

  it('crea un servicio nuevo', () => {
    const antes = listar().length
    crear(nuevo)
    expect(listar().length).toBe(antes + 1)
  })

  it('actualiza un servicio existente', () => {
    crear(nuevo)
    const resultado = actualizar('ZZ001', { precio: 9000 })
    expect(resultado.precio).toBe(9000)
  })

  it('elimina un servicio', () => {
    crear(nuevo)
    expect(eliminar('ZZ001')).toBe(true)
    expect(obtener('ZZ001')).toBeNull()
  })
})