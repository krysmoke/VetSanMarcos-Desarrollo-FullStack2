import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <Container className="py-5 text-center">
      <h1 className="mb-3">Bienvenido a Veterinaria San Marcos</h1>
      <p className="lead mb-4">
        Cuidamos a tu mascota con atención cercana en Rancagua desde 2009.
        Agenda tu cita o revisa nuestros servicios disponibles.
      </p>
      <Button as={Link} to="/servicios" variant="primary" size="lg">
        Ver servicios
      </Button>
    </Container>
  )
}

export default Inicio