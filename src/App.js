import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './header'; //Header는 개별 모듈화한거고
import Player from './player';   //Player는 전체 모듈화한거라서 import 규칙이 다름


//function 컴포넌트였던 App을 class 컴포넌트로 변경()
class App extends React.Component {
  state = {
    players : [
      {name : 'LDK', score : 30, id : 1}, //state를 부모 컴포넌트에 정의해주는게 lifting up (https://eastflag.co.kr/react/scoreboard-by-c-r-a/component-deep-dive/)
      {name : 'JSH', score : 40, id : 2},
      {name : 'SHE', score : 50, id : 3},
      {name : 'KIM', score : 60, id : 4}
    ]
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players}/>
				{
          this.state.players.map((player) => {
            return (
							<Player name={player.name} score={player.score} id={player.id} key={player.id}
                      removePlayer={this.handleRemovePlayer} changeScore={this.handleChangeScore} />
            )
          })
        }

      </div>
    );
  }

  //callback function
  handleRemovePlayer = (id) => {
    this.setState(prevState => ({
      players:prevState.players.filter(player => player.id !== id)
    })); //함수의 중괄호가 아니라 json 객체를리턴한다고 ()를 감싸준것
  }

  //callback function
  handleChangeScore = (id, score) => {
    console.log('handleChangeScore', id, score);

    this.setState(prevState => {
    	// const player = prevState.players.find(player => player.id === id);
    	// player.score += score;
    	// return {
    	// 	player : { ...prevState.players } //새로운 바구니를 만드는거, ...:배열안의 요소들을 가져와서 펼쳐라
			// }

			//map으로 ..(원래 배열이 바뀌기 때문에 copy가 필요없음)
			return {
				player:prevState.players.map(player => {
					if(player.id === id){
						player.score += score;
					}
					return player;
				})
			}
		})
  }

}

export default App;
