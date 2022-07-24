export const USER_FILTER = 'USERS/USER_FILTER';

export const filterOptions = filterText => {
  return {
    type: USER_FILTER,
    filterText,
  };
};
