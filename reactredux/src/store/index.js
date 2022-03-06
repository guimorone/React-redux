import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const api = 'teste';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));

export default store;