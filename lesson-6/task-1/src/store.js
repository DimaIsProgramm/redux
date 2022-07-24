import { applyMiddleware, createStore, compose } from 'redux';
import { counterReducer } from './counter.reducer';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const store = createStore(counterReducer, composeEnchancers(applyMiddleware(logger)));

export default store;
