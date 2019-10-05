/*player 리듀스*/
const playerInitialState = {
	players : [
		{name : 'LDK', score : 30, id : 1},
		{name : 'JSH', score : 40, id : 2},
		{name : 'SHE', score : 50, id : 3},
		{name : 'KIM', score : 60, id : 4}
	]
};

const playerReducer = (state = playerInitialState, action) => {
	return state;
};

export default playerReducer;