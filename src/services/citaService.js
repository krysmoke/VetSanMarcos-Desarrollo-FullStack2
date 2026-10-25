const CLAVE = 'citas'

function leer() {
  const guardado = localStorage.getItem(CLAVE)
  return guardado === null ? [] : JSON.parse(guardado)
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista))
}

export function listarCitas() {
  return leer()
}

export function crearCita(cita) {
  const lista = leer()
  const ocupada = lista.some(
    (c) => c.fecha === cita.fecha && c.hora === cita.hora && c.estado !== 'Rechazada'
  )
  if (ocupada) {
    throw new Error('Ese horario ya está ocupado. Elige otra fecha u hora.')
  }
  const nueva = { ...cita, id: Date.now(), estado: 'Pendiente' }
  guardar([...lista, nueva])
  return nueva
}

export function cambiarEstado(id, estado) {
  const lista = leer()
  const indice = lista.findIndex((c) => c.id === id)
  if (indice === -1) return null
  lista[indice] = { ...lista[indice], estado }
  guardar(lista)
  return lista[indice]
}