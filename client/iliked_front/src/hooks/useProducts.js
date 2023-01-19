import { useState, useEffect } from "react";
import http from "../services/httpService";
import config from "../config.json";

const apiEndpoint = `${config.apiURL}/products`;

function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  useEffect(() => {
    async function getProducts() {
      try {
        let { data: products } = await http.get(apiEndpoint);

        setProducts(products);
        setIsLoadingProducts(false);
      } catch (ex) {
        console.log(ex);
      }
    }
    getProducts();
  }, []);

  return { isLoadingProducts, products };
}

export default useProducts;
