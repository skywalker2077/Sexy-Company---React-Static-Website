import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">CONTATO</h2>
          <p className="contact-subtitle">
            Entre em contato conosco para mais informações
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h3>HORÁRIO DE FUNCIONAMENTO</h3>
              <div className="hours">
                <p><strong>Segunda - Sábado:</strong> 10h - 20h</p>
                <p><strong>Domingo:</strong> 12h - 18h</p>
              </div>
            </div>

            <div className="info-section">
              <h3>ENDEREÇOS</h3>
              <div className="locations">
                <div className="location">
                  <h4>Loja Principal</h4>
                  <p>Rua Augusta, 2500<br />
                  São Paulo, SP 01412-100<br />
                  (11) 3456-7890</p>
                </div>
                
                <div className="location">
                  <h4>Filial Shopping</h4>
                  <p>Shopping Iguatemi<br />
                  Av. Brigadeiro Faria Lima, 2232<br />
                  São Paulo, SP 01451-905<br />
                  (11) 3456-7891</p>
                </div>
              </div>
            </div>

            <div className="info-section">
              <h3>REDES SOCIAIS</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <span>Facebook</span>
                </a>
                <a href="#" className="social-link">
                  <span>Instagram</span>
                </a>
                <a href="#" className="social-link">
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>FORMULÁRIO DE CONTATO</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Serviço de Interesse</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="moda-feminina">Moda Feminina</option>
                    <option value="moda-masculina">Moda Masculina</option>
                    <option value="acessorios">Acessórios</option>
                    <option value="personal-stylist">Personal Stylist</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos como podemos ajudar você..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;