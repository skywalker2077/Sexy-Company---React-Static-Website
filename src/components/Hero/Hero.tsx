import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          BEM-VINDOS À<br />
          <span className="company-name">SEXY COMPANY</span>
        </h1>
        
        <p className="hero-subtitle">
          Desde 2020, a Sexy Company tem oferecido aos seus clientes leais 
          produtos de moda e estilo que duram para toda a vida. 
          Com uma seleção cuidadosa de peças exclusivas, adoraríamos 
          recebê-lo em nossa loja premium.
        </p>

        <div className="hero-actions">
          <button className="cta-button primary" onClick={scrollToContact}>
            FALE CONOSCO
          </button>
          <button className="cta-button secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
            NOSSOS SERVIÇOS
          </button>
        </div>

        <div className="hero-info">
          <div className="hours-info">
            <h3>ABERTO 7 DIAS POR SEMANA</h3>
            <p>Segunda - Sábado: 10h - 20h</p>
            <p>Domingo: 12h - 18h</p>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;