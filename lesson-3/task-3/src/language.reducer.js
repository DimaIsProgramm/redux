import { LANGUAGE } from './language.actions'

const language = 'en';

export const languageReducer = (state = language, action) => {
  switch (action.type) {
    case LANGUAGE:
      console.log(action.payload)
      return action.payload
      
    default:
      return state;
  };
};

export default languageReducer;
