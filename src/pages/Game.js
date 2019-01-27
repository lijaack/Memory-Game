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
        highscore: 0,
        clicked: {},
        message: ""
    };
    
    componentDidMount() {
        this.setState({cartoons: Cartoon})
    }
    
    clickedImage = event => {
        console.log(event.target.dataset.id)
        this.setState({message: ""})
        if(this.state.clicked[event.target.dataset.id]){
            this.setState({clicked: {}});
            this.setState({score: 0});
            this.setState({message: "you lose"})
        } else {
            this.setState({score: this.state.score+1});
            this.setState({clicked: {...this.state.clicked, [event.target.dataset.id]:1}});
            this.shuffleCartoons(this.state.cartoons);
            this.checkWin();
            this.checkHighScore();
        }


    }

    shuffleCartoons = cartoons => {
        for(var i=0; i < cartoons.length; i++){
            var random = Math.floor(Math.random() * cartoons.length)
            var hold = cartoons[i]
            cartoons[i] = cartoons[random];
            cartoons[random] = hold;
        }
        return cartoons
    }

    checkWin = () => {
        if (this.state.score + 1 === 12){
            this.setState({message: "you win"})
        }
    }
    checkHighScore = ()=>{
        if (this.state.score + 1 > this.state.highscore){
            this.setState({highscore: this.state.score + 1})
        }
    }

    render(){
        return(
            <div>
            <Nav
            message={this.state.message}
            score={this.state.score}
            highscore={this.state.highscore}
            />
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