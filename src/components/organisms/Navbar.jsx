import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavbarPrincipal = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="md" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">🐾 Veterinaria San Marcos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-principal" />
        <Navbar.Collapse id="navbar-principal">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
            <Nav.Link as={Link} to="/solicitar-cita">Solicitar cita</Nav.Link>
            <Nav.Link as={Link} to="/mis-citas">Mis citas</Nav.Link>
            <Nav.Link as={Link} to="/admin/servicios">Admin</Nav.Link>
            <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPrincipal