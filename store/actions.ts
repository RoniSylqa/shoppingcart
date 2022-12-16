import {Item} from './types';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addItemToCart = (item: Item) => (dispatch: any) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};

export const removeItemFromCart = (id: number) => (dispatch: any) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: id,
  });
};
