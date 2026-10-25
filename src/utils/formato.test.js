import { describe, it, expect } from 'vitest'
import { formatearPrecio } from './formato'

describe('formatearPrecio', () => {
  it('muestra el símbolo de pesos', () => {
    expect(formatearPrecio(15000)).toContain('$')
  })

  it('usa separador de miles', () => {
    expect(formatearPrecio(15000)).toContain('15.000')
  })
})