/*
* https://eastflag.co.kr/react/scoreboard-by-c-r-a/stats-component/
* 스코어보드에서 통계내는 컴포넌트
*/

import React from 'react';

export const Stats = (props) => {
	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Players:</td>
				<td>0</td>
			</tr>
			<tr>
				<td>Total Points:</td>
				<td>0</td>
			</tr>
			</tbody>
		</table>
	);
}