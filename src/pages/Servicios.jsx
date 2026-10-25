import Container from 'react-bootstrap/Container'
import PlantillaPublica from '../components/templates/PlantillaPublica'
import ListaServicios from '../components/organisms/ListaServicios'
import { useServicios } from '../context/ServiciosContext'

const Servicios = () => {
  const { servicios } = useServicios()

  return (
    <PlantillaPublica>
      <Container className="py-4">
        <h2 className="mb-4">Nuestros servicios</h2>
        <ListaServicios servicios={servicios} />
      </Container>
    </PlantillaPublica>
  )
}

export default Servicios