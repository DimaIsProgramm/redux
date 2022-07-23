 lines (18 sloc)  353 Bytes

export const ADD_PRODUCT = 'PRODUCT/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'PRODUCT/REMOVE_PRODUCT';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  };
};

export const removeProduct = productId => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
};
