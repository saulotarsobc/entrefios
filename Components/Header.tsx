import Link from "next/link";
import Logo from "@/public/logo_para_site2.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header id="header">
      <div id="logo">
        <Image
          src={Logo}
          alt="Logo da Entrefios - STM"
          width={200}
          height={50}
        />
      </div>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/produtos">Produtos</Link>
      </nav>
    </header>
  );
}
