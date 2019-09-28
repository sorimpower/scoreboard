import React from 'react';

class Counter extends React.Component {
	//속성은 자기자신 내부에서 만드는 값이다. 이벤트에 따라 변경된다.
	state = {
		score:30
	};

	increment = () => {
		this.setState((prevState) => ({
			score : prevState.score+1
		}));
	};

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">{this.state.score}</span>
				<button className="counter-action increment" onClick={this.increment}> + </button>
			</div>
		);
	}
}

export default Counter;