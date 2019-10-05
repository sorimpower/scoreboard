import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
	change = (val) => {
		this.props.changeScore(this.props.id, val);
	};

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => {this.change(-1)}}> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={() => {this.change(1)}}> + </button>
			</div>
		);
	}
}

Counter.propTypes = {
	id : PropTypes.number,
	score : PropTypes.number,
	changeScore : PropTypes.func
}

export default Counter;