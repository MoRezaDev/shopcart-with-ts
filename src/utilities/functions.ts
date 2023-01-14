import { InitialStateType } from "../context/CartContextProvider";
import data from "../data/data.json";

type SeachQueryType = string;

type ResultFilterType = {
  id: number;
  title: string;
  image: string;
  price: number;
  desc: string;
  category: string;
}[];

export const isInCart = (state: InitialStateType, id: number) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

export const getQuantity = (state: InitialStateType, id: number) => {
  const result = state.selectedItems.findIndex((item) => item.id === id);
  if (result === -1) {
    return 0;
  } else {
    return state.selectedItems[result].quantity;
  }
};

export const findInObjects = (searchQuery: SeachQueryType) => {
  const result: ResultFilterType = [];
  if (searchQuery.length === 0) return result;
  data.headphone.map((item) => {
    if (!!item.title.toLowerCase().includes(searchQuery)) {
      result.push({ ...item });
    } else null;
  });
  data.laptop.map((item) => {
    if (!!item.title.toLowerCase().includes(searchQuery)) {
      result.push({ ...item });
    } else null;
  });
  data.mobile.map((item) => {
    if (!!item.title.toLowerCase().includes(searchQuery)) {
      result.push({ ...item });
    } else null;
  });
  data.speaker.map((item) => {
    if (!!item.title.toLowerCase().includes(searchQuery)) {
      result.push({ ...item });
    } else null;
  });
  return result;
};

export const getDetailPage = (category: string, id: number) => {};
