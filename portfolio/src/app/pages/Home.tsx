import Image from "next/image";
import logo from "../../../public/pc.png";
import "./Home.css";
import Button from "../components/Button/Button";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const skills = [
  {
    icon: "</>",
    title: "Desenvolvimento Web",
    description: "React, Next.js, TypeScript",
  },
  {
    icon: "▱",
    title: "Back-End",
    description: "Java, Spring Boot",
  },
  {
    icon: "▤",
    title: "Dados e Qualidade",
    description: "Testes, boas práticas e qualidade",
  },
  {
    icon: "⌘",
    title: "Formação",
    description: "Engenharia de Software com Java e IA",
  },
];

export default function Home() {
  return (
    <main className="home">
      <section className="home-container">
        <div className="home-content">
          <span className="home-greeting">Olá, eu sou</span>
          <h1>
            Leonardo <span>Pedroso</span>
          </h1>
          <h2>Desenvolvedor de Software</h2>
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas e atualmente me
            especializo em Engenharia de Software com Java e Inteligência
            Artificial. Movido pela paixão por tecnologia e inovação, busco
            transformar ideias em soluções inteligentes, eficientes e de
            impacto.
          </p>
          <div className="home-buttons">
            <Button title="Ver Projetos" href="/projetos" variant="primary" />
            <Button title="Entrar em Contato" href="/contato" variant="secondary"/>
          </div>
          <SocialLinks/>
        </div>

        {/* Imagem */}
        <div className="home-image">
          <Image
            src={logo}
            alt="Estação de trabalho de desenvolvimento de software"
            priority
          />
        </div>
      </section>

      {/* Habilidades */}
      <section className="home-skills">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <span className="skill-icon">{skill.icon}</span>

            <div className="skill-info">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Indicador de rolagem */}
      <div className="home-scroll">
        <span></span>
      </div>
    </main>
  );
}
