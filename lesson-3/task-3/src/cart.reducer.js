import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const initialState = {
  productList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        productList: state.productList.concat(action.payload.productData),
      };
    }
    case DELETE_PRODUCT: {
      const newList = state.productList.filter(product => product.id !== action.payload.productId);
      return {
        ...state,
        productList: newList,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
