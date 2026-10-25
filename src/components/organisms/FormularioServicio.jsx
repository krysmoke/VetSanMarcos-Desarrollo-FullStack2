import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CampoTexto from '../atoms/CampoTexto'

const VACIO = {
  codigo: '', categoria: '', nombre: '', especie: '',
  duracion: '', precio: '', observaciones: '',
}

const FormularioServicio = ({ servicioInicial, onGuardar, onCancelar, errorGeneral }) => {
  const esEdicion = !!servicioInicial
  const [datos, setDatos] = useState(servicioInicial ?? VACIO)
  const [errores, setErrores] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setDatos((prev) => ({ ...prev, [name]: value }))
  }

  const validar = () => {
    const nuevos = {}
    if (!datos.codigo.trim()) nuevos.codigo = 'El código es obligatorio.'
    if (!datos.categoria.trim()) nuevos.categoria = 'La categoría es obligatoria.'
    if (!datos.nombre.trim()) nuevos.nombre = 'El nombre es obligatorio.'
    if (!datos.especie.trim()) nuevos.especie = 'La especie es obligatoria.'
    if (!datos.duracion.trim()) nuevos.duracion = 'La duración es obligatoria.'
    if (!datos.precio || Number(datos.precio) <= 0) {
      nuevos.precio = 'Ingresa un precio mayor a 0.'
    }
    setErrores(nuevos)
    return Object.keys(nuevos).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validar()) return
    onGuardar({ ...datos, precio: Number(datos.precio) })
  }

  return (
    <Form onSubmit={handleSubmit} noValidate className="mb-4 p-3 border rounded bg-light">
      <h5 className="mb-3">{esEdicion ? 'Editar servicio' : 'Nuevo servicio'}</h5>
      {errorGeneral && <p className="text-danger">{errorGeneral}</p>}
      <Row>
        <Col md={4}>
          <CampoTexto label="Código" name="codigo" value={datos.codigo}
            onChange={handleChange} disabled={esEdicion}
            isInvalid={!!errores.codigo} errorMessage={errores.codigo} />
        </Col>
        <Col md={4}>
          <CampoTexto label="Categoría" name="categoria" value={datos.categoria}
            onChange={handleChange}
            isInvalid={!!errores.categoria} errorMessage={errores.categoria} />
        </Col>
        <Col md={4}>
          <CampoTexto label="Nombre" name="nombre" value={datos.nombre}
            onChange={handleChange}
            isInvalid={!!errores.nombre} errorMessage={errores.nombre} />
        </Col>
        <Col md={3}>
          <CampoTexto label="Especie" name="especie" value={datos.especie}
            onChange={handleChange}
            isInvalid={!!errores.especie} errorMessage={errores.especie} />
        </Col>
        <Col md={3}>
          <CampoTexto label="Duración" name="duracion" value={datos.duracion}
            onChange={handleChange}
            isInvalid={!!errores.duracion} errorMessage={errores.duracion} />
        </Col>
        <Col md={3}>
          <CampoTexto label="Precio" type="number" name="precio" value={datos.precio}
            onChange={handleChange}
            isInvalid={!!errores.precio} errorMessage={errores.precio} />
        </Col>
        <Col md={3}>
          <CampoTexto label="Observaciones" name="observaciones" value={datos.observaciones}
            onChange={handleChange} />
        </Col>
      </Row>
      <Button type="submit" variant="primary" className="me-2">
        {esEdicion ? 'Guardar cambios' : 'Crear servicio'}
      </Button>
      <Button variant="outline-secondary" onClick={onCancelar}>Cancelar</Button>
    </Form>
  )
}

export default FormularioServicio
