import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer/index";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk, logger),
	));

export default store;