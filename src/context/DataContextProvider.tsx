import { useState, createContext, useEffect } from "react";

import dataJson from "../data/data.json";

type ChildrenType = {
  children: React.ReactNode;
};

type DataTypeObjects = {
  id: number;
  title: string;
  price: number;
  image: string;
  desc: string;
  category: string;
};

type DataTypes = {
  mobile: DataTypeObjects[];
  headphone: DataTypeObjects[];
  laptop: DataTypeObjects[];
  speaker: DataTypeObjects[];
};
type DataContextType = {
  data: DataTypes | null | undefined;
};

export const dataContext = createContext({} as DataContextType);

const DataContextPrivder = ({ children }: ChildrenType) => {
  const [data, setData] = useState<DataTypes | null>();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await dataJson;
      setData(response);
    };

    fetchApi();
  });

  return (
    <dataContext.Provider value={{ data }}>{children}</dataContext.Provider>
  );
};

export default DataContextPrivder;
