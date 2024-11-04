import axios from "axios";
import { useQuery } from "react-query";

export default function useFetchProducts() {
  return useQuery(
    ["products"],
    async () => {
      const response = axios.get("https://fakestoreapi.com/products");
      return (await response).data;
    },
    {
      onError: () => {
        console.log("Error occured");
      },
    }
  );
}
