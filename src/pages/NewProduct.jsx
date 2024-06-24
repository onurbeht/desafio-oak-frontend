import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);
  const [availableString, setAvailableString] = useState("");

  const navigate = useNavigate();

  const api = import.meta.env.VITE_API;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const price_in_cents = price * 100;

    setAvailable(availableString === "Sim" ? true : false);

    const product = { name, info, price_in_cents, available };

    fetch(api, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    await navigate("/");
  };

  return (
    <section className="min-h-[80vh] max-w-full bg-zinc-200 text-zinc-700 container flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-2 border-zinc-700 rounded-md gap-2 p-5"
      >
        <label className="flex flex-col ">
          <span className="font-extrabold">Nome do Produto:</span>
          <input
            className="outline-none p-2 rounded-md"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="flex flex-col ">
          <span className="font-extrabold">Descrição do Produto:</span>
          <input
            className="outline-none p-2 rounded-md"
            type="text"
            max={100}
            required
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </label>
        <label className="flex flex-col ">
          <span className="font-extrabold">Valor do Produto:</span>
          <input
            className="outline-none p-2 rounded-md"
            type="number"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          <span className="font-extrabold">Disponivel:</span>
          <select onChange={(e) => setAvailableString(e.target.value)}>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </label>

        <Button variant="outline" type="submit">
          Cadastrar
        </Button>
      </form>
    </section>
  );
};

export default NewProduct;
