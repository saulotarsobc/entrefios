import Produto from "../../Components/Produto";
// import produtos from "./produtos.json";
import { ProdutoType } from "@/types";

export default async function page() {
  const produtos = await (await fetch("http://localhost:4000")).json();

  console.log(produtos);

  return (
    <main id="produtos">
      <h1>Página de Produtos</h1>
      {produtos.map(({ nome, preco }: ProdutoType, index: any) => (
        <Produto key={index} nome={nome} preco={preco} />
      ))}
    </main>
  );
}
