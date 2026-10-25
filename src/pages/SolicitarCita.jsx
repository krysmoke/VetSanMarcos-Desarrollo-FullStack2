import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import PlantillaPublica from '../components/templates/PlantillaPublica'
import FormularioSolicitudCita from '../components/organisms/FormularioSolicitudCita'
import { useServicios } from '../context/ServiciosContext'
import { crearCita } from '../services/citaService'

const SolicitarCita = () => {
  const { servicios } = useServicios()
  const navigate = useNavigate()

  const handleEnviar = (datos) => {
    try {
      const cita = crearCita(datos)
      navigate('/cita-confirmada', { state: { cita } })
    } catch (e) {
      navigate('/cita-no-agendada', { state: { motivo: e.message } })
    }
  }

  return (
    <PlantillaPublica>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="shadow-sm">
              <Card.Body className="p-4">
                <h2 className="mb-4">Solicitar cita</h2>
                <FormularioSolicitudCita servicios={servicios} onEnviar={handleEnviar} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </PlantillaPublica>
  )
}

export default SolicitarCita