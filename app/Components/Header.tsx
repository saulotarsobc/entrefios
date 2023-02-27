import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <div id="logo">Logo here</div>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/produtos">Outro</Link>
        <Link href="/produtos">Outro</Link>
        <Link href="/produtos">Outro</Link>
      </nav>
    </header>
  );
}
