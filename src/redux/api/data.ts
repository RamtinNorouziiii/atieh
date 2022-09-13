import { instance } from "../../utils/axios";

export const FetchData = async () => {
    return await instance.get(
      `/mainpage`
    );
  };