import Container from 'react-bootstrap/Container'
import ListaServicios from '../components/organisms/ListaServicios'
import servicios from '../data/servicios.json'

const Servicios = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4">Nuestros servicios</h2>
      <ListaServicios servicios={servicios} />
    </Container>
  )
}

export default Servicios