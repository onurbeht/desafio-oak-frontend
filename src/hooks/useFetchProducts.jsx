import { useState, useLayoutEffect } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const url = import.meta.env.VITE_API;

  useLayoutEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return {
    products,
  };
};
