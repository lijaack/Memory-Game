import React from "react";
import { Col, Row, Container } from "../Grid";

function Nav(props) {
  return (
    <nav className="navbar-dark bg-primary">
    <Container>
      <Row>
        <Col size="4">
          <a className="" href="/">
            Clicky Game
          </a>
        </Col>
        <Col size="4">
          <p>
            {props.message}
          </p>
        </Col>
        <Col size="4">
          <p>
            Score: {props.score}
          </p>
        </Col>
      </Row>
    </Container>
    </nav>
  );
}

export default Nav;
