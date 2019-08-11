import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

export default [sagaMiddleware, routerMiddleware(history)];
