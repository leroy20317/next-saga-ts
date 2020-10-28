import { actionTypes } from '../actions/common';

const initialState = {
	message: {},
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_MESSAGE:
			return {
				...state,
				...{ message: action.payload },
			};

		default:
			return state;
	}
}

export default reducer;
