


export const ADD_TO_CART = 'ADD_TO_CART';
export function addToCart(product, quantity, unitCost) {
 return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment(product, quantity, unitCost));
    }, 1000);
  };
}

function increment(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}
