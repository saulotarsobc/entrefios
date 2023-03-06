import React from "react";
import { ProdutoType } from "@/types";

function Produto({ nome }: ProdutoType) {
  return <div>Produto: {nome}</div>;
}

export default Produto;
