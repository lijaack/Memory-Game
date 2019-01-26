import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";


class Game extends Component {

    

    render(){
        return(
            <div>
            <Nav/>
            <Jumbotron>
                <h1>Memory Game</h1>
            </Jumbotron>
            <Container>
                <Row>
                    <Col size="md-3 sm-4">
                        
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
   
}

export default Game;