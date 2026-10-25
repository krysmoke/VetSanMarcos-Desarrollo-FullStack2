import { Link, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import PlantillaPublica from '../components/templates/PlantillaPublica'

const CitaConfirmada = () => {
  const { state } = useLocation()
  const cita = state?.cita

  return (
    <PlantillaPublica>
      <Container className="py-5 text-center" style={{ maxWidth: 600 }}>
        <Alert variant="success">
          <h3>¡Solicitud enviada!</h3>
          <p className="mb-0">
            Tu cita quedó en estado <strong>Pendiente</strong>. La recepcionista la
            confirmará o te propondrá otro horario.
          </p>
        </Alert>
        {cita && (
          <div className="text-start border rounded p-3 mb-4">
            <p className="mb-1"><strong>Mascota:</strong> {cita.mascota} ({cita.especie})</p>
            <p className="mb-1"><strong>Servicio:</strong> {cita.servicio}</p>
            <p className="mb-1"><strong>Fecha:</strong> {cita.fecha}</p>
            <p className="mb-0"><strong>Hora:</strong> {cita.hora}</p>
          </div>
        )}
        <Button as={Link} to="/mis-citas" variant="primary" className="me-2">Ver mis citas</Button>
        <Button as={Link} to="/" variant="outline-secondary">Volver al inicio</Button>
      </Container>
    </PlantillaPublica>
  )
}

export default CitaConfirmada