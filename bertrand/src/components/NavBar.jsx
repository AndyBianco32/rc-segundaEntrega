import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";


import { CartWidget } from "./CartWidget"
import { onBackgroundMessage } from 'firebase/messaging/sw';

export const NavBar = () => (

  <Navbar bg="dark" data-bs-theme="dark" >
    <Container>
      <Nav className="me-auto">
        {/* <Navbar.Brand href="#home">BERTRAND</Navbar.Brand> */}
        <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
        <Nav.Link as={NavLink} to="/category/Literatura">Literatura</Nav.Link>
        <Nav.Link as={NavLink} to="/category/Historia">Historia</Nav.Link>
        <Nav.Link as={NavLink} to="/category/Infantil">Infantil</Nav.Link>
        <Nav.Link as={NavLink} to="/category/Medicina">Medicina</Nav.Link>
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>

)