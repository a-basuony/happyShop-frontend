import baseUrl from "../Api/baseURL";

const useGetData = async (url, parmas) => {
  const res = await baseUrl.get(url, parmas);
  return res.data;
};

const useGetDataToken = async (url, parmas) => {
  const res = await baseUrl.get(url);
  return res.data;
};

export { useGetData, useGetDataToken };
