/*
* https://eastflag.co.kr/react/scoreboard-by-c-r-a/stats-component/
* 스코어보드에서 통계내는 컴포넌트
*/

import React from 'react';

export const Stats = (props) => {
	let totalPlayers = props.players.length;
	let totalScore = 0;
	props.players.forEach(player => totalScore += player.score); //이거 그냥 이렇게 쓰는군..

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>{totalScore}</td>
			</tr>
			</tbody>
		</table>
	)
}

