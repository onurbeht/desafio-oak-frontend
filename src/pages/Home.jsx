import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import React from "react";

const Home = () => {
  const { products } = useFetchProducts();

  console.log(products);

  return (
    <main className="min-h-[80vh] max-w-full bg-zinc-200 text-zinc-700 container">
      {products.length === 0 ? (
        <div>Nenhum produto cadastrado!</div>
      ) : (
        <>
          <div className="flex justify-center items-center py-2 font-bold text-2xl border-b-2 border-zinc-700">
            <h1>Lista de produtos cadastrados</h1>
          </div>
          <section className="flex gap-2 flex-wrap pt-2">
            {products.map((prod) => (
              <Card className="min-w-1/3 min-h-max" key={prod.id}>
                <CardHeader>
                  <CardTitle>{prod.name}</CardTitle>
                  <CardDescription>{prod.info}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <p className="font-bold">R$ {prod.priceInCents / 100}</p>
                  <p className="underline">
                    {prod.available ? "Disponivel" : "Não disponivel"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
