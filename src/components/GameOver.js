import React, { Component } from "react";
import Game from "./Game";

export default class GameOver extends Component {
  state = {
    gameId: 1,
    history: []
  };

  resetGame = status => {
    console.log("Reset Game !");
    // this.setState(prevState => ({ gameId: prevState.gameId + 1 }));
    this.setState({
      gameId: this.state.gameId + 1,
      history: [...this.state.history, status]
    });
  };

  render() {
    const { gameId, history } = this.state;
    return (
      <Game
        key={gameId}
        autoPlay={gameId > 1}
        challengeRange={[2, 9]}
        challengeSize={6}
        initialSeconds={20}
        onPlayAgain={this.resetGame}
        history={history}
      />
    );
  }
}
