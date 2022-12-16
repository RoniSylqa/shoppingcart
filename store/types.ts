export interface Item {
  id: number;
  name: string;
  price: number;
  removeButton?: boolean;
}

export interface Action {
  type: string;
  payload: Item;
}

export interface ItemsProps {
  isShowingCart?: true;
}
