import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';
import pageReducer from './users/page.reducer';

const reducer = combineReducers({
  users: usersReducer,
  currentPage: pageReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
