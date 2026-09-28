import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TarjetaServicio from '../molecules/TarjetaServicio'

const ListaServicios = ({ servicios }) => {
  return (
    <Row className="g-4">
      {servicios.map((servicio) => (
        <Col key={servicio.codigo} xs={12} md={6} lg={4}>
          <TarjetaServicio servicio={servicio} />
        </Col>
      ))}
    </Row>
  )
}

export default ListaServicios