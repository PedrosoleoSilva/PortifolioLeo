import Image from "next/image";
import logo from "../../../public/pc.png";
import "./Home.css";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <main className="home">
      <section className="home-container">
        <div className="home-content">
          <h1>Olá, eu sou Leonardo!</h1>
          <h2>Desenvolvedor de Software</h2>
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas e atualmente me
            especializo em Engenharia de Software com Java e Inteligência
            Artificial. Movido pela paixão por tecnologia e inovação, busco
            transformar ideias em soluções inteligentes, eficientes e de
            impacto.
          </p>
          <Button 
            title="Ver Projetos" 
            href="/projetos" 
            variant="primary" 
          />

          <Button
            title="Entrar em Contato"
            href="/contato"
            variant="secondary"
          />
        </div>
        <div className="home-image">
          <Image
            src={logo}
            alt="Ilustração de desenvolvimento de software"
            priority
          />
        </div>
      </section>
    </main>
  );
}
