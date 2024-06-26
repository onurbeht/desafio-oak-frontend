import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = import.meta.env.VITE_API;

  //console.log(products);

  useLayoutEffect(() => {
    setLoading(true);
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

    setLoading(false);
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main className="min-h-[80vh] max-w-full bg-zinc-200 text-zinc-700 container">
      {products.length > 0 ? (
        <>
          <div className="flex justify-between py-2 font-bold text-2xl border-b-2 border-zinc-700">
            <h1>Lista de produtos cadastrados</h1>
          </div>
          <section className="flex gap-2 flex-col items-center py-2">
            {products.map((prod) => (
              <Card className="w-3/4" key={prod.id}>
                <CardHeader>
                  <CardTitle>{prod.name}</CardTitle>
                  <CardDescription>{prod.info}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between">
                  <div className="flex justify-between">
                    <p className="font-bold">R$ {prod.priceInCents / 100}</p>
                    <p className="underline">
                      {prod.available ? "Disponivel" : "Não disponivel"}
                    </p>
                  </div>
                  <div className="flex justify-center pt-2">
                    <Button variant="outline" className="w-fit ">
                      <Link to={`/produto/${prod.id}`}>Ver mais</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </>
      ) : (
        <div>Nenhum produto cadastrado!</div>
      )}
    </main>
  );
};

export default Home;
