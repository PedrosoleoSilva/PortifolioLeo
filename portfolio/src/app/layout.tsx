
import Header from "./components/header/Header";
import "./globals.css";

export const metadata = {
  title: "LP - Portfólio",
  description: "Portfólio de Leonardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
