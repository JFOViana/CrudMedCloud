import { UseQueryOptions, useQuery } from "react-query";
import { api } from "../api";

const get = async (url) => {
  const { data } = await api.get(url);
  return data;
};

export const getQuery = (url: string, actions: any[], options?: any) => {
  return useQuery(actions, () => get(url), options);
};
