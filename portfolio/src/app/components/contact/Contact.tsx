
"use client";

import { FormEvent } from "react";
import "./Contact.css";

export default function Contact() {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const destination = "SEU_EMAIL_AQUI";

    const body = `
Nome: ${name}
E-mail: ${email}

Mensagem:
${message}
    `;

    window.location.href =
      `mailto:${destination}?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="contact">

      <section className="contact-container">

        {/* Informações de contato */}
        <div className="contact-info">

          <span className="contact-label">
            VAMOS CONVERSAR?
          </span>

          <h1>
            Entre em <span>Contato</span>
          </h1>

          <p className="contact-description">
            Tem um projeto em mente, uma oportunidade profissional
            ou simplesmente deseja conversar sobre tecnologia?
            Será um prazer receber sua mensagem!
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <span className="contact-icon">@</span>

              <div>
                <h3>E-mail</h3>
                <p>leosilvapedroso@hotmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">⌖</span>

              <div>
                <h3>Localização</h3>
                <p>Paraná, Brasil</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">↗</span>

              <div>
                <h3>Disponibilidade</h3>
                <p>Aberto a novas oportunidades</p>
              </div>
            </div>

          </div>

          <div className="contact-social">
            <h3>Minhas redes</h3>

            <div className="contact-social-links">
              <a href="https://github.com/PedrosoleoSilva" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/leonardo-pedroso/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Formulário */}
        <div className="contact-form-container">

          <h2>Envie uma mensagem</h2>

          <p>Preencha os campos abaixo para entrar em contato.</p>

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="form-group">
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sobre o que deseja conversar?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                placeholder="Escreva sua mensagem..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Enviar mensagem <span>→</span>
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}
