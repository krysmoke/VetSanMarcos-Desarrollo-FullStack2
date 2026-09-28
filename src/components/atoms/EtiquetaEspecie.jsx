import Badge from 'react-bootstrap/Badge'

const EtiquetaEspecie = ({ especie }) => {
  return (
    <Badge bg="info" text="dark" className="fw-normal">
      {especie}
    </Badge>
  )
}

export default EtiquetaEspecie