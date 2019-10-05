import React from 'react';
import './App.css';
import {Header} from './header'; //Header는 개별 모듈화한거고
import Player from './player';   //Player는 전체 모듈화한거라서 import 규칙이 다름
import {AddPlayerForm} from './addPlayerForm';
import {connect} from "react-redux";


//function 컴포넌트였던 App을 class 컴포넌트로 변경()
class App extends React.Component {
	maxId = 4; //클래스의 속성

  render() {
    return (
      <div className="scoreboard">
        <Header
					title="My Scoreboard"
					players={this.props.players}
				/>
				{
          this.props.players.map((player) => {
            return (
							<Player
								name={player.name}
								score={player.score}
								id={player.id}
								key={player.id}
								removePlayer={this.handleRemovePlayer}
								changeScore={this.handleChangeScore}
							/>
            )
          })
        }
			<AddPlayerForm
				addPlayer={this.handleAddPlayer}
			/>
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

	handleAddPlayer = (name) => {
		console.log("handleAddPlayer",name);
		this.setState(prevState => {
			// prevState.players.push({name : name, score : 0, id : ++this.maxId});
			// return {
			// 	players: [ ...prevState.players] //원래 배열에 새로운 배열을 옮겨주는 것
			// }

			const players = [ ...prevState.players]; //원본배열을 복사해 새로운 배열을 만들고
			players.push({name : name, score : 0, id : ++this.maxId}); //새로운 배열에 공을 하나더 추가한 뒤
			return {
				players : players
			}//새로운 배열을 return 하면 됨(그러면 원본배열을 훼손하지 않음)
		});
	}
}



//store의 state를 props 매핑하는 과정
const mapStateToProps = (state) => ({
	//왼쪽은 props, 오른쪽이 store의 state
	players : state.playerReducer.players
});

//curring펑션 : 펑션에 파라미터로 펑션을 전달해주는 것
//HoC(Higher-Order Components) : 대표적 예로 redux의 connect(), 컴포넌트를 입려받아서 새로운 컴포넌트를 생성한다는 개념
export default connect(mapStateToProps)(App);
