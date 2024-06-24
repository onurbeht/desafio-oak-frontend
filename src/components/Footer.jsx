import React from "react";

const Footer = () => {
  return (
    <footer className="min-w-full h-[10vh] flex justify-center items-center bg-zinc-700 text-zinc-200 ">
      <span>
        Desafio oak - Criado por{" "}
        <a
          href="https://github.com/onurbeht"
          target="_blank"
          className="underline"
        >
          Bruno Oliveira
        </a>
      </span>
    </footer>
  );
};

export default Footer;
