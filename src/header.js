import React from 'react';
import {Stats} from './stats';
import {Stopwatch} from "./Stopwatch";

export const Header = (props) => {
	return (
		<header className="header">
			<Stats players={props.players}/>
			<h1 className="h1">{props.title}</h1>
			<Stopwatch/>
		</header>
	);
};
