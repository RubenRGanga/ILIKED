import { useEffect, useState } from "react";
import http from "../services/httpService";
import config from "../config.json";

const apiEndpoint = `${config.apiURL}/categories`;

function useCategories() {
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories() {
      try {
        let { data: categories } = await http.get(apiEndpoint);

        setCategories(categories);
        setIsLoadingCategories(false);
      } catch (ex) {
        console.log(ex);
      }
    }
    getCategories();
  }, []);

  return { isLoadingCategories, categories };
}

export default useCategories;
