import React from 'react';
import Counter from "./counter";

const Player = (props) => {
	console.log(props);
	return (
		<div className="player">
			<span className="player-name">
				<button className="remove-player" onClick={() => props.removePlayer(props.id)}> X </button>
				{props.name}
			</span>
			<Counter score={props.score}/> {/*JSX Expression*/}
		</div>
	);
};

export default Player;