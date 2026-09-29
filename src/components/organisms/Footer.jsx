import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="text-center">
        <p className="mb-1">Veterinaria San Marcos — Rancagua, Chile</p>
        <p className="mb-0 small text-secondary">© 2026 Todos los derechos reservados</p>
      </Container>
    </footer>
  )
}

export default Footer