import { USER_FILTER } from './users.actions';
import users from './users';

const initialState = {
  usersList: users,
  filterText: '',
  count: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FILTER: {
      const { filterText } = action;
      if (filterText.length === 0) {
        return {
          ...state,
          count: 0,
          filterText: '',
          usersList: users,
        };
      }
      const newUsersList = state.usersList.slice().filter(user => {
        if (user.name.toLowerCase().includes(filterText.toLowerCase())) {
          state.count = 0;
          return user;
        }
      });
      newUsersList.reduce((acc, user) => {
        acc += user ? (state.count += 1) : 0;
        return acc;
      }, state.count);

      return {
        ...state,
        filterText: filterText,
        usersList: newUsersList,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
