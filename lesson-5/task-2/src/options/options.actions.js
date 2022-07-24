export const TOGGLE_OPTION = 'OPTIONS/TOGGLE_OPTIONS';

export const toggleOption = optionId => {
  return {
    type: TOGGLE_OPTION,
    payload: {
      optionId,
    },
  };
};
