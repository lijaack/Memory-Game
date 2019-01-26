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
    

    clickedImage = event => {
        console.log(event.target.id)
        if(this.state.clicked[event.target.id]){
            console.log("you lose")
            this.state.clicked={};
            this.state.score=0;
        } else {
            this.state.clicked[event.target.id]=1;
            this.state.score ++
            console.log(this.state.score)
        }
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