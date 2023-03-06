import Produto from "../Components/Produto";
import produtos from "./produtos.json";
import { ProdutoType } from "@/types";

export default async function page() {
  return (
    <main id="produtos">
      <h1>Página de Produtos</h1>
      {produtos.map(({ nome, preco }: ProdutoType, index) => (
        <Produto key={index} nome={nome} preco={preco}/>
      ))}
    </main>
  );
}
