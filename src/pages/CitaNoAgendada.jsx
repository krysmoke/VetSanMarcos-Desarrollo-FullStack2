import { Link, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import PlantillaPublica from '../components/templates/PlantillaPublica'

const CitaNoAgendada = () => {
  const { state } = useLocation()

  return (
    <PlantillaPublica>
      <Container className="py-5 text-center" style={{ maxWidth: 600 }}>
        <Alert variant="danger">
          <h3>No pudimos agendar tu cita</h3>
          <p className="mb-0">{state?.motivo ?? 'Ocurrió un problema al registrar la solicitud.'}</p>
        </Alert>
        <Button as={Link} to="/solicitar-cita" variant="primary">Intentar de nuevo</Button>
      </Container>
    </PlantillaPublica>
  )
}

export default CitaNoAgendada