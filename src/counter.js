import React from 'react';

class Counter extends React.Component {
	increment = () => {
		this.setState((prevState) => ({
			score : prevState.score+1
		}));
	};

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement"> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={this.increment}> + </button>
			</div>
		);
	}
}

export default Counter;