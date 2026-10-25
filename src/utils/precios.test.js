import { describe, it, expect } from 'vitest'
import { calcularPrecioFinal, RECARGO_URGENCIA } from './precios'

describe('calcularPrecioFinal', () => {
  it('no suma recargo en horario normal', () => {
    expect(calcularPrecioFinal(20000, false)).toBe(20000)
  })

  it('suma el recargo de urgencia fuera de horario', () => {
    expect(calcularPrecioFinal(20000, true)).toBe(20000 + RECARGO_URGENCIA)
  })
})