import React from 'react';

export class AddPlayerForm extends React.Component {
	state = {
		value : ''
	}

	handleValuechange = (event) => {
		this.setState({value : event.target.value});
	}

	render() {
		return (
			<form className="form">
				<input className="input" type="text" placeholder="enter a player's name"
				value={this.state.value} onChange={this.handleValuechange}></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		)
	}
}