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

		const form = document.getElementById("form");
		const player = document.getElementById("player");
		console.log(form.checkValidity()); //html5에서 제공하는 함수
		console.log(player.validity.valid); //html5에서 제공하는 값


		this.props.addPlayer(this.state.value);
		this.setState({value : ''});
	}

	render() {
		return (
			<form
				id="form"
				noValidate //html5기본 validation을 안할때
				className="form"
				onSubmit={this.handleSubmit}>
				<input
					required
					className="input"
					id="players"
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