import serviciosIniciales from '../data/servicios.json'

const CLAVE = 'servicios'

function leer() {
  const guardado = localStorage.getItem(CLAVE)
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(serviciosIniciales))
    return [...serviciosIniciales]
  }
  return JSON.parse(guardado)
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista))
}

export function listar() {
  return leer()
}

export function obtener(codigo) {
  return leer().find((s) => s.codigo === codigo) ?? null
}

export function crear(servicio) {
  const lista = leer()
  if (lista.some((s) => s.codigo === servicio.codigo)) {
    throw new Error('Ya existe un servicio con ese código')
  }
  const nueva = [...lista, servicio]
  guardar(nueva)
  return servicio
}

export function actualizar(codigo, cambios) {
  const lista = leer()
  const indice = lista.findIndex((s) => s.codigo === codigo)
  if (indice === -1) return null
  const actualizado = { ...lista[indice], ...cambios, codigo }
  lista[indice] = actualizado
  guardar(lista)
  return actualizado
}

export function eliminar(codigo) {
  const lista = leer()
  const nueva = lista.filter((s) => s.codigo !== codigo)
  guardar(nueva)
  return nueva.length < lista.length
}