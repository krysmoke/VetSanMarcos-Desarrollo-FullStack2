import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CampoTexto from '../atoms/CampoTexto'

const HORAS = ['09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00']
const ESPECIES = ['Perro', 'Gato', 'Conejo', 'Ave']
const VACIO = { mascota: '', especie: '', servicio: '', fecha: '', hora: '' }

const FormularioSolicitudCita = ({ servicios, onEnviar }) => {
  const [datos, setDatos] = useState(VACIO)
  const [errores, setErrores] = useState({})
  const hoy = new Date().toLocaleDateString('en-CA')

  const handleChange = (e) => {
    const { name, value } = e.target
    setDatos((prev) => ({ ...prev, [name]: value }))
  }

  const validar = () => {
    const nuevos = {}
    if (!datos.mascota.trim()) nuevos.mascota = 'Ingresa el nombre de tu mascota.'
    if (!datos.especie) nuevos.especie = 'Selecciona la especie.'
    if (!datos.servicio) nuevos.servicio = 'Selecciona un servicio.'
    if (!datos.fecha) nuevos.fecha = 'Selecciona una fecha.'
    else if (datos.fecha < hoy) nuevos.fecha = 'La fecha no puede ser anterior a hoy.'
    if (!datos.hora) nuevos.hora = 'Selecciona una hora.'
    setErrores(nuevos)
    return Object.keys(nuevos).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validar()) return
    onEnviar(datos)
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <CampoTexto
        label="Nombre de la mascota"
        name="mascota"
        value={datos.mascota}
        onChange={handleChange}
        placeholder="Ej: Firulais"
        isInvalid={!!errores.mascota}
        errorMessage={errores.mascota}
      />

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="especie">
            <Form.Label>Especie</Form.Label>
            <Form.Select name="especie" value={datos.especie}
              onChange={handleChange} isInvalid={!!errores.especie}>
              <option value="">Selecciona...</option>
              {ESPECIES.map((e) => <option key={e} value={e}>{e}</option>)}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errores.especie}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="servicio">
            <Form.Label>Servicio</Form.Label>
            <Form.Select name="servicio" value={datos.servicio}
              onChange={handleChange} isInvalid={!!errores.servicio}>
              <option value="">Selecciona...</option>
              {servicios.map((s) => (
                <option key={s.codigo} value={s.nombre}>{s.nombre}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errores.servicio}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <CampoTexto
            label="Fecha"
            type="date"
            name="fecha"
            value={datos.fecha}
            onChange={handleChange}
            min={hoy}
            isInvalid={!!errores.fecha}
            errorMessage={errores.fecha}
          />
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="hora">
            <Form.Label>Hora</Form.Label>
            <Form.Select name="hora" value={datos.hora}
              onChange={handleChange} isInvalid={!!errores.hora}>
              <option value="">Selecciona...</option>
              {HORAS.map((h) => <option key={h} value={h}>{h}</option>)}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errores.hora}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button type="submit" variant="primary" className="w-100">
        Solicitar cita
      </Button>
    </Form>
  )
}

export default FormularioSolicitudCita