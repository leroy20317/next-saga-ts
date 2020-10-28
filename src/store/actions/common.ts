import { Obj } from '@/interfaces/index';

export const actionTypes: Obj = {
	GET_MESSAGE: 'GET_MESSAGE',
	SET_MESSAGE: 'SET_MESSAGE',
};

export function getMessage() {
	return {
		type: actionTypes.GET_MESSAGE,
	};
}

export function setMessage(payload) {
	return {
		type: actionTypes.SET_MESSAGE,
		payload,
	};
}
