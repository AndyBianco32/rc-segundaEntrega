import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


import { CartWidget } from "./CartWidget"

export const NavBar = () => (

  <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Nav className="me-auto">
        {/* <Navbar.Brand href="#home">BERTRAND</Navbar.Brand> */}
        <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
        <Nav.Link as={NavLink} to="/category/literatura">Literatura</Nav.Link>
        <Nav.Link as={NavLink} to="/category/historia">Historia</Nav.Link>
        <Nav.Link as={NavLink} to="/category/infantil">Infantil</Nav.Link>
        <Nav.Link as={NavLink} to="/category/medicina">Medicina</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>

)