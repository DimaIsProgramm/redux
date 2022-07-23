import { SET_USER, REMOVE_USER } from './users.actions';

const initialState = null;
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return  action.payload.userData,
    }
    case REMOVE_USER: {
      return null
    }
    default:
      return state;
  }
};

export default userReducer;
