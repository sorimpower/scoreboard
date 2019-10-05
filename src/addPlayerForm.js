import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value : ''
	}

	handleValuechange = (event) => {
		this.setState({value : event.target.value});
	}

	handleSubmit = (event) => {
		event.preventDefault(); //기본 설정된 이벤트를 막는 것
		//event.stopPropagation(); //상위 이벤트를 막는 것
		this.props.addPlayer(this.state.value);
		this.setState({value : ''});
	}

	render() {
		return (
			<form
				className="form"
				onSubmit={this.handleSubmit}>
				<input
					className="input"
					type="text"
					placeholder="enter a player's name"
					value={this.state.value}
					onChange={this.handleValuechange}
				></input>
				<input
					className="input"
					type="submit"
					value="Add Player"
				></input>
			</form>
		)
	}
}