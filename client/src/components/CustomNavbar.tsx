import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function CustomNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Welcome X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/add'}>Add Expense</Nav.Link>
            <Nav.Link as={Link} to={'/modify'}>Modify Expense</Nav.Link>
            <Nav.Link as={Link} to={'/view'}>View Expense</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
