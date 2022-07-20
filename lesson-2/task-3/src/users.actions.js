export const addUser = newUser => {
  return {
    type: 'ADD_USER',
    newUser,
  };
};

export const deleteUser = id => {
  return {
    type: 'DELETE_USER',
    id,
  };
};
