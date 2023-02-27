import "@/scss/main.scss";
import Header from "./components/Header";
export const metadata = {
  title: "Entrefios - STM",
  description:
    "Bem-vindo ao nosso site de crochê, onde você pode encontrar uma variedade de produtos feitos com fio de malha. Nossos produtos são cuidadosamente tecidos à mão com habilidade e carinho, resultando em peças únicas e duráveis. Se você está procurando por algo especial para decorar sua casa ou presentear alguém especial, você veio ao lugar certo!",
  authors: [{ name: "Saulo Costa", url: "https://github.com/saulotarsobc" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
