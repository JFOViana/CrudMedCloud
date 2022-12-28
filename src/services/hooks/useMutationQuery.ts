import { useMutation } from "react-query";
import { api } from "../api";

type methods = "post" | "put" | "patch" | "delete";

export const useMutationQuery = (url: string, method: methods = "post") => {
  const prepareMutation = (data) => {
    return api[method](url, data);
  };

  return useMutation(prepareMutation);
};
