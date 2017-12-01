import {combineReducers} from 'redux';
const reducers = combineReducers({
    login : loginReducer
});

function loginReducer(username='aaa',action){	
	return {
		username:action.username||username
	}
}

export default reducers;
