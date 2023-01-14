import { createContext, useReducer } from "react";

type CartContextProps = {
  children: React.ReactNode;
};

export type InitialStateType = {
  selectedItems: {
    id: number;
    image: string;
    title: string;
    desc: string;
    price: number;
    quantity: number;
    category: string;
  }[];
  itemsCounter: number;
  total: number;
  checkout: boolean;
};

const initialState: InitialStateType = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

type StateReducerType = InitialStateType;
type ActionReducerType = {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "INCREASE" | "DECREASE";
  payload: {
    id: number;
    image: string;
    desc: string;
    title: string;
    price: number;
    category: string;
  };
};
type ActionReducerType2 = {
  type: "CLEAR" | "CHECKOUT";
};
type ActionReducerTotal = ActionReducerType2 | ActionReducerType;

const sumItems = (state: StateReducerType) => {
  const itemsCounter = state.selectedItems.reduce(
    (initial, item) => initial + item.quantity,
    0
  );
  const total = state.selectedItems.reduce(
    (initial, item) => initial + item.quantity * item.price,
    0
  );
  return { itemsCounter, total };
};

const reducer = (state: StateReducerType, action: ActionReducerTotal) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id))
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      return {
        ...state,
        ...sumItems(state),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(state),
        checkout: false,
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state),
        checkout: false,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state),
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

type CartContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<ActionReducerTotal>;
};

export const cartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: CartContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
