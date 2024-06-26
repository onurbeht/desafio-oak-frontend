import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DotsVerticalIcon,
  PinBottomIcon,
  PinTopIcon,
} from "@radix-ui/react-icons";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [asc, setAsc] = useState(true);
  const [desc, setDesc] = useState(false);
  const [direction, setDirection] = useState("");

  const api = import.meta.env.VITE_API;

  useEffect(() => {
    if (asc) {
      setDirection("ASC");
    } else {
      setDirection("DESC");
    }
  }, [asc, desc]);

  useEffect(() => {
    const sortedUrl = `${api}?direction=${direction}`;

    setLoading(true);
    fetch(sortedUrl, {
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
  }, [direction]);

  useLayoutEffect(() => {
    setLoading(true);
    fetch(api, {
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

  return (
    <main className="min-h-[80vh] max-w-full bg-zinc-200 text-zinc-700 container">
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <div className="flex justify-between items-center py-2 font-bold text-2xl border-b-2 border-zinc-700">
            <h1>Lista de produtos cadastrados</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="icon">
                  <DotsVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Ordenação: Valor</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={asc}
                  onClick={() => {
                    setAsc(true);
                    setDesc(false);
                  }}
                  disabled={asc}
                >
                  <span className=" flex gap-2 items-center">
                    <PinBottomIcon />
                    Crescrente
                  </span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={desc}
                  onClick={() => {
                    setDesc(true);
                    setAsc(false);
                  }}
                  disabled={desc}
                >
                  <span className=" flex gap-2 items-center">
                    <PinTopIcon />
                    Decrescente
                  </span>
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                    <Button
                      variant="outline"
                      className="w-fit "
                      disabled={!prod.available}
                    >
                      <Link to={`/produto/${prod.id}`}>Ver mais</Link>
                    </Button>
                  </div>
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
