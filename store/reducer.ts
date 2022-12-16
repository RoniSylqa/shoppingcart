import {ADD_ITEM, REMOVE_ITEM} from './actions';
import {Action, Item} from './types';

const initialState: {
  cart: Item[];
} = {
  cart: [],
};

function userReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, cart: state.cart.concat(action.payload)};
    case REMOVE_ITEM:
      const id = action.payload;
      return {
        ...state,
        cart: state.cart.filter((item: Item) => item.id !== Number(id)),
      };
    default:
      return state;
  }
}

export default userReducer;
