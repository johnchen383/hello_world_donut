import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";

function useGet(baseURL: string, handler: (response: AxiosResponse) => void) {
  useEffect(() => {
    axios.get(baseURL).then((response: AxiosResponse) => {
      handler(response);
    });
  }, []);
}

export default useGet;
