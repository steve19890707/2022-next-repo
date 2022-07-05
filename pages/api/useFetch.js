import useSWR from "swr";

const fetcher = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('data erorr.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}

export const useSimpleData = () => {
  const API_URL = "https://extreme-ip-lookup.com/json/";
  const { data, error } = useSWR(API_URL, fetcher);
  const isLoading = !error && !data;
  return {
    data: data,
    dataIsLoading: isLoading,
    dataIsError: error,
  };
};