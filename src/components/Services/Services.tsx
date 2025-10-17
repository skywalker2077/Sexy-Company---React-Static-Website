import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      title: 'MODA FEMININA',
      description: 'Coleção exclusiva de roupas femininas com design moderno e elegante.',
      features: ['Vestidos exclusivos', 'Acessórios únicos', 'Consultoria de estilo']
    },
    {
      title: 'MODA MASCULINA',
      description: 'Peças masculinas sofisticadas para homens que valorizam estilo.',
      features: ['Ternos sob medida', 'Camisas premium', 'Acessórios masculinos']
    },
    {
      title: 'ACESSÓRIOS',
      description: 'Complementos perfeitos para finalizar seu look com personalidade.',
      features: ['Joias exclusivas', 'Bolsas de grife', 'Calçados importados']
    },
    {
      title: 'PERSONAL STYLIST',
      description: 'Consultoria personalizada para criar o visual perfeito para você.',
      features: ['Análise de estilo', 'Montagem de looks', 'Compras assistidas']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">NOSSOS SERVIÇOS</h2>
          <p className="services-subtitle">
            Oferecemos uma experiência completa em moda e estilo
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-inner">
                <div className="service-front">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <span className="service-hover-hint">Ver mais</span>
                </div>
                <div className="service-back">
                  <h3 className="service-title">{service.title}</h3>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <button className="service-cta">Saiba Mais</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>INTERESSADO EM NOSSOS SERVIÇOS?</h3>
          <p>Entre em contato conosco e descubra como podemos ajudar você</p>
          <button 
            className="contact-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            FALE CONOSCO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;