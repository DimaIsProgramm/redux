export const LANGUAGE = 'LANGUAGE/CHANGE';

export const setLanguage = language => {
  return {
    type: LANGUAGE,
    payload: {
      language,
    },
  };
};
