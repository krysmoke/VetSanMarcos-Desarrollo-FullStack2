export const RECARGO_URGENCIA = 10000

export function calcularPrecioFinal(precioBase, esUrgenciaFueraDeHorario = false) {
  return esUrgenciaFueraDeHorario ? precioBase + RECARGO_URGENCIA : precioBase
}