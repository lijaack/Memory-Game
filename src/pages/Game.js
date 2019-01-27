import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Cartoon from "../cartoon.json";
import CartoonCard from "../components/CartoonCard";

class Game extends Component {
    state = {
        cartoons: [] ,
        score: 0,
        clicked: {}
      };
    
    componentDidMount() {
        this.setState({cartoons: Cartoon})
    }
    
    clickedImage = event => {
        console.log(event.target.id)
        if(this.state.clicked[event.target.id]){
            this.setState({clicked: {}});
            this.setState({score: 0});
        } else {
            this.setState({clicked: {...this.state.clicked, [event.target.id]:1}});
            this.setState({score: this.state.score + 1});
            this.shuffleCartoons()
        }
    }

    shuffleCartoons = () => {
        for(var i=0; i < this.state.cartoons.length; i++){
            var random = Math.floor(Math.random() * this.state.cartoons.length)
            console.log("random number: " + random)
            var hold = this.state.cartoons[i]
            this.state.cartoons[i] = this.state.cartoons[random];
            this.state.cartoons[random] = hold;
            console.log(this.state.cartoons)


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
                    {this.state.cartoons.map(item => (
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