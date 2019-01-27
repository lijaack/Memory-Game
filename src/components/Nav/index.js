import React from "react";
import { Col, Row, Container } from "../Grid";
import "./style.css";

function Nav(props) {
  return (
    <nav className="nav-color">
    <Container>
      <Row>
        <Col size="4">
          <a className="text-center text-light baloo no-decor" href="/">
            Clicky Game
          </a>
        </Col>
        <Col size="4">
          <p className="text-center text-light baloo">
            {props.message}
          </p>
        </Col>
        <Col size="4">
          <p className="text-center text-light baloo">
            Score: {props.score}      High score: {props.highscore}
          </p>
        </Col>
      </Row>
    </Container>
    </nav>
  );
}

export default Nav;
