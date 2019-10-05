/*combine 리듀스*/

import playerReducer from "./player";
import {combineReducers} from "redux";

const allReducers = combineReducers({
		playerReducer //key,value로 안쓰고 이렇게 하나로만 쓰면 key와 value의 이름이 같다는 의미
});

export default allReducers;