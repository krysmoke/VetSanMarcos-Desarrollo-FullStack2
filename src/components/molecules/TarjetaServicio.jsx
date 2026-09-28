import Card from 'react-bootstrap/Card'
import EtiquetaEspecie from '../atoms/EtiquetaEspecie'
import { formatearPrecio } from '../../utils/formato'

const TarjetaServicio = ({ servicio }) => {
  const { nombre, categoria, especie, duracion, precio, observaciones } = servicio

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column">
        <small className="text-muted">{categoria}</small>
        <Card.Title className="mt-1">{nombre}</Card.Title>
        <div className="mb-2">
          <EtiquetaEspecie especie={especie} />
        </div>
        <Card.Text className="mb-1">⏱ {duracion}</Card.Text>
        {observaciones && (
          <Card.Text className="text-muted small">{observaciones}</Card.Text>
        )}
        <Card.Text className="fs-5 fw-bold mt-auto mb-0">
          {formatearPrecio(precio)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default TarjetaServicio