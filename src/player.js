import React from 'react';
import Counter from "./counter";


class Player extends React.PureComponent { //PureComponent는 바뀐 부분만 렌더링 일어남
	render() {
		console.log(this.props.name, ' rendered');
		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}> X </button>
					{this.props.name}
				</span>
				<Counter score={this.props.score} id={this.props.id} changeScore={this.props.changeScore}/> {/*JSX Expression*/}
			</div>
		)
	}
}

export default Player;