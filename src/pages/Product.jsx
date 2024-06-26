import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const api = import.meta.env.VITE_API;

  const url = api + "/" + id;

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));


    setLoading(false);
  }, [id]);

  return (
    <div className="min-h-[80vh] max-w-full bg-zinc-200 text-zinc-700 container flex justify-center items-center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Card className="min-w-1/3 min-h-max">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.info}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-between">
            <div className="flex justify-between">
              <p className="font-bold">R$ {product.priceInCents / 100}</p>
              <p className="underline">
                {product.available ? "Disponivel" : "Não disponivel"}
              </p>
            </div>
            <div className="flex justify-center pt-2">
              <Button variant="outline" className="w-fit ">
                <Link to={`/`}>Voltar</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Product;
