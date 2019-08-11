import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import reducers from './reducers';
import middleware, { history } from './middleware';

export default createStore(
	combineReducers({
		...reducers,
		form: formReducer,
		router: connectRouter(history)
	}),
	composeWithDevTools(applyMiddleware(...middleware))
);
