
import { useLocation } from "react-router-dom";

import { Card, Container, Nav } from "react-bootstrap"

import { Register } from "./Register";
import { Login } from "./Login";



export function Auth  ( ) {

  let location = useLocation();



  return (
    <Container className="PositionProduct d-flex pb-5 mt-5 pt-5 ">
      <Card className="  shadow  mb-5   mx-auto ">
        <Card.Header>
          <Nav fill  variant="tabs" defaultActiveKey={ location.hash || "#register" }>
            <Nav.Item>
              <Nav.Link href="#login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#register">Register</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
        
      {location.hash === "#register" ? <Register /> :
      location.hash === "#login" ? < Login /> :
      <Register /> }
        </Card.Body>
      </Card>
    </Container>
  );
};
