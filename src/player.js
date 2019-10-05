import React from 'react';
import Counter from "./counter";


class Player extends React.Component { //PureComponent는 바뀐 부분만 렌더링 일어남
	render() {
		const {removePlayer,id,name,score,changeScore} = this.props;

		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}> X </button>
					{name}
				</span>
				<Counter score={score} id={id} changeScore={changeScore}/> {/*JSX Expression*/}
			</div>
		)
	}

	//바뀐 곳만 렌더링 하기위해선 이 함수를 호출하든지, React.PureComponent를 상속받든지 해야함
	//shouldComponentUpdate 는 무조건 true/false를 리턴해야함
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.score != this.props.score ? true : false;
	}
}

export default Player;