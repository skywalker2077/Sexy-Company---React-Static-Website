import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SEXY COMPANY</h3>
            <p className="footer-description">
              Sua loja de moda e estilo desde 2020. 
              Oferecemos as melhores peças e um atendimento personalizado 
              para você sempre estar na moda.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Facebook">
                <span>F</span>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <span>I</span>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <span>W</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul className="footer-links">
              <li>
                <button onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
                  Galeria
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Horário de Funcionamento</h4>
            <div className="footer-hours">
              <p><strong>Segunda - Sábado</strong></p>
              <p>10h - 20h</p>
              <br />
              <p><strong>Domingo</strong></p>
              <p>12h - 18h</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <div className="footer-contact">
              <p>
                <strong>Loja Principal</strong><br />
                Rua Augusta, 2500<br />
                São Paulo, SP<br />
                (11) 3456-7890
              </p>
              <br />
              <p>
                <strong>Filial Shopping</strong><br />
                Shopping Iguatemi<br />
                Av. Faria Lima, 2232<br />
                (11) 3456-7891
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Sexy Company. Todos os direitos reservados.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Política de Privacidade</a>
              <span className="separator">|</span>
              <a href="#">Termos de Uso</a>
              <span className="separator">|</span>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>

        <button className="back-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;