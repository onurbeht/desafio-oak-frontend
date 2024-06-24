import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="min-w-full h-[10vh] flex justify-between items-center bg-zinc-700 text-zinc-200 ">
      <span className="font-bold text-lg pl-4">
        <Link to="/">Oak desafio</Link>
      </span>
      <span className="font-bold text-lg pr-4">
        <Button variant="ghost">
          <Link to="/novo-produto">Novo Produto</Link>
        </Button>
      </span>
    </nav>
  );
};

export default Navbar;
