import { applyMiddleware, createStore, AnyAction } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import combinedReducer from './reducers/index';
import rootSaga from './sagas/index';

const bindMiddleware = middleware => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension');
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

// create your reducer
const reducer = (state, action: AnyAction) => {
	if (action.type === HYDRATE) {
		const nextState = {
			...state, // use previous state
			...action.payload, // apply delta from hydration
		};
		return nextState;
	} else {
		return combinedReducer(state, action);
	}
};

export const makeStore: any = () => {
	const sagaMiddleware = createSagaMiddleware();
	const store: any = createStore(reducer, bindMiddleware([sagaMiddleware]));

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
