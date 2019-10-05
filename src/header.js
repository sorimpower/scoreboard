import React from 'react';
import {Stats} from './stats';
import {Stopwatch} from "./Stopwatch";

export const Header = (players, title) => {
	// const {players, title} = props; //props를 객체로 동일한 key 값에 할당, 더간단하게는 위에 쓰면됨
	return (
		<header className="header">
			<Stats players={players}/>
			<h1 className="h1">{title}</h1>
			<Stopwatch/>
		</header>
	);
};
