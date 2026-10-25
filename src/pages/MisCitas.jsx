import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import PlantillaPublica from '../components/templates/PlantillaPublica'
import { listarCitas, cambiarEstado } from '../services/citaService'

const COLORES = { Pendiente: 'warning', Confirmada: 'success', Rechazada: 'danger' }

const MisCitas = () => {
  const [citas, setCitas] = useState(() => listarCitas())

  const handleEstado = (id, estado) => {
    cambiarEstado(id, estado)
    setCitas(listarCitas())
  }

  return (
    <PlantillaPublica>
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Mis citas</h2>
          <Button as={Link} to="/solicitar-cita">+ Solicitar cita</Button>
        </div>

        {citas.length === 0 ? (
          <p className="text-muted">Aún no tienes citas solicitadas.</p>
        ) : (
          <Table striped hover responsive>
            <thead>
              <tr>
                <th>Mascota</th>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Recepción</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((c) => (
                <tr key={c.id}>
                  <td>{c.mascota} ({c.especie})</td>
                  <td>{c.servicio}</td>
                  <td>{c.fecha}</td>
                  <td>{c.hora}</td>
                  <td><Badge bg={COLORES[c.estado]}>{c.estado}</Badge></td>
                  <td className="text-nowrap">
                    <Button size="sm" variant="outline-success" className="me-2"
                      onClick={() => handleEstado(c.id, 'Confirmada')}>Confirmar</Button>
                    <Button size="sm" variant="outline-danger"
                      onClick={() => handleEstado(c.id, 'Rechazada')}>Rechazar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </PlantillaPublica>
  )
}

export default MisCitas