import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Cartoon from "../cartoon.json";
import CartoonCard from "../components/CartoonCard";

class Game extends Component {
    state = {
        cartoons: [],
        score: 0,
        clicked: {}
      };
    

    clickedImage = () => {
        console.log("hello")
    }
    render(){
        return(
            <div>
            <Nav/>
            <Jumbotron>
                <h1>Memory Game</h1>
            </Jumbotron>
            <Container>
                <Row>
                    {Cartoon.map(item => (
                        <Col size="md-3 sm-4" key={item.id}>
                            <CartoonCard 
                            onClick={this.clickedImage}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            />
                             
                        </Col>

                    ))}
                </Row>
            </Container>
            </div>
        )
    }
   
}

export default Game;