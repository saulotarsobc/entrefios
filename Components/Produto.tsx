import React from "react";
import { ProdutoType } from "@/types";

function Produto({ nome, preco }: ProdutoType) {
  return (
    <div className="produto">
      <div>Produto: {nome}</div>
      <div>Preço: {preco}</div>
    </div>
  );
}

export default Produto;
