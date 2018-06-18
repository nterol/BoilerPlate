import React, { Component } from "react";
import _ from "lodash";

class Number extends Component {
  handleClick = () => {
    const { available, onClick, index } = this.props;
    available ? onClick(index) : null;
  };

  render() {
    return (
      <button
        className="number"
        style={{ opacity: this.props.available ? 1 : 0.3 }}
        onClick={this.handleClick}
      >
        {this.props.value}
      </button>
    );
  }
}

const Target = props => (
  <div
    className="target"
    style={{
      color:
        props.status === "playing" || props.status === "new"
          ? "black"
          : props.status === "won"
            ? "green"
            : "red"
    }}
  >
    {props.status === "playing"
      ? props.value
      : props.status === "new"
        ? "Ready ?"
        : "Play Again !"}
  </div>
);

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class Game extends Component {
  state = {
    gameStatus: "new",
    remainingSeconds: this.props.initialSeconds,
    selectedIds: [],
    operation: "+",
    computed: 0
  };

  componentDidMount() {
    this.props.autoPlay ? this.startGame() : null;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  isNumberAvailable = nIndex => this.state.selectedIds.indexOf(nIndex) === -1;

  challengeNumbers = Array.from({ length: this.props.challengeSize }).map(() =>
    randomNumberBetween(...this.props.challengeRange, 0)
  );

  target = _
    .sampleSize(this.challengeNumbers, this.props.challengeSize - 2)
    .reduce((acc, curr) => {
      let calc = [(acc, curr) => acc + curr, (acc, curr) => acc * curr];
      let index = acc === 0 ? 0 : Math.floor(Math.random() * 2);
      return calc[index](acc, curr);
    }, 0);

  static bgColors = {
    playing: "#ccc",
    won: "green",
    lost: "red"
  };

  startGame = () => {
    this.setState({ gameStatus: "playing" }, () => {
      this.intervalId = setInterval(() => {
        this.setState(prevState => {
          const newRemainingSeconds = prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0) {
            clearInterval(this.intervalId);
            return {
              gameStatus: "lost",
              remainingSeconds: 0
            };
          }
          return { remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
    });
  };

  selectNumber = nIndex => {
    if (this.state.gameStatus !== "playing") return;
    let { operation, computed } = this.state;
    let newComputed = this.computeNewValue(computed, operation, nIndex);
    this.setState(
      {
        ...this.state,
        computed: newComputed,
        selectedIds: [...this.state.selectedIds, nIndex],
        gameStatus:
          newComputed === this.target
            ? "won"
            : this.state.selectedIds.length + 1 === this.props.challengeSize - 2
              ? "lost"
              : "playing"
      },
      () => {
        if (this.state.gameStatus !== "playing") {
          clearInterval(this.intervalId);
        }
      }
    );
  };

  computeNewValue = (computed, operation, nIndex) => {
    let toCompute = this.challengeNumbers[nIndex];
    console.log(`${computed} ${operation} ${this.challengeNumbers[nIndex]}`);
    return operation === "*" ? computed * toCompute : computed + toCompute;
  };

  selectOperation = e => {
    if (this.state.gameStatus !== "playing") return;
    let newOpe = e.target.id;
    console.log(e.target.id);
    this.setState({ ...this.state, operation: newOpe });
  };

  /* This is the original version's computing function. 
  I though that recomputing the whole operation on each turn was not very efficient

      selectNumber = numberIndex => {
   if (this.state.gameStatus !== "playing") return;
   this.setState(
     prevState => ({
       selectedIds: [...prevState.selectedIds, numberIndex],
       gameStatus: this.calcGameStatus([...prevState.selectedIds, numberIndex])
     }),
     () => {
       if (this.state.gameStatus !== "playing") {
         clearInterval(this.intervalId);
       }
     }
   );
   ;
   
  calcGameStatus = selectedIds => {
     const sumSelected = selectedIds.reduce(
       (acc, curr) => {
         if (this.state.operation === "*") {
           console.log(acc * this.challengeNumbers[curr]);
           return this.state.pretendant * this.challengeNumbers[curr];
         } else {
           console.log(acc + this.challengeNumbers[curr]);
           return acc + this.challengeNumbers[curr];
         }
       },
        this.state.operation === "*"
          ? acc * this.challengeNumbers[curr]
          : acc + this.challengeNumbers[curr],
       0
     );
     console.log("COMPUTED", sumSelected);
      if (sumSelected !== this.target && selectedIds.length === 4) return "lost";
     if (sumSelected < this.target) return "playing";
     return sumSelected === this.target ? "won" : "lost";
 };
 */

  render() {
    const { gameStatus, remainingSeconds, operation } = this.state;
    return (
      <div className="game">
        <h1>Calculus</h1>
        <p>{`Get the target number right through the ${
          this.props.challengeSize
        } numbers under ${this.props.initialSeconds} seconds !`}</p>
        <Target status={gameStatus} value={this.target} />
        <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) => (
            <Number
              key={index}
              value={this.state.gameStatus === "new" ? "?" : value}
              index={index}
              available={this.isNumberAvailable(index)}
              onClick={this.selectNumber}
            />
          ))}
          <button
            style={{
              color:
                operation === "+" && gameStatus === "playing" ? "blue" : "white"
            }}
            className="button"
            id="+"
            onClick={this.selectOperation}
          >
            +
          </button>
          <button
            style={{
              color:
                operation === "*" && gameStatus === "playing" ? "blue" : "white"
            }}
            className="button"
            id="*"
            onClick={this.selectOperation}
          >
            {/*
            You can add here any other button , fon instance '-' or '%' or '/'....
          */}
            *
          </button>
        </div>
        <div className="footer">
          {gameStatus === "new" ? (
            <button className="button" onClick={this.startGame}>
              Start
            </button>
          ) : (
            <div className="timer-value">{remainingSeconds}</div>
          )}
          {["won", "lost"].includes(gameStatus) && (
            <div>
              <div
                style={{
                  color: Game.bgColors[gameStatus],
                  fontSize: "2rem"
                }}
              >{`You've ${gameStatus} !`}</div>
              <button
                className="button"
                onClick={() =>
                  this.props.onPlayAgain(gameStatus === "won" ? "won" : "lost")
                }
              >
                Play again
              </button>
            </div>
          )}
        </div>
        {this.props.history.length > 0 ? (
          <div className="scoreboard">
            <p>Your Gaming record :</p>
            <div className="ballContainer">
              {this.props.history.map((h, index) => (
                <div
                  className="pastille"
                  style={{
                    backgroundColor: Game.bgColors[h]
                  }}
                  key={index}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No game records yet ! Play the game !</p>
        )}
      </div>
    );
  }
}
