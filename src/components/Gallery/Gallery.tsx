import React, { useState } from 'react';
import './Gallery.css';

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const galleryItems = [
    {
      id: 1,
      category: 'feminino',
      title: 'Vestido Elegante',
      description: 'Vestido longo para ocasiões especiais',
      placeholder: '300x400'
    },
    {
      id: 2,
      category: 'masculino',
      title: 'Terno Executivo',
      description: 'Terno sob medida para o homem moderno',
      placeholder: '300x400'
    },
    {
      id: 3,
      category: 'acessorios',
      title: 'Colar Dourado',
      description: 'Acessório exclusivo em ouro',
      placeholder: '300x400'
    },
    {
      id: 4,
      category: 'feminino',
      title: 'Blusa Social',
      description: 'Elegância para o ambiente corporativo',
      placeholder: '300x400'
    },
    {
      id: 5,
      category: 'masculino',
      title: 'Camisa Premium',
      description: 'Qualidade superior em cada detalhe',
      placeholder: '300x400'
    },
    {
      id: 6,
      category: 'acessorios',
      title: 'Bolsa de Couro',
      description: 'Sofisticação em couro genuíno',
      placeholder: '300x400'
    },
    {
      id: 7,
      category: 'feminino',
      title: 'Saia Midi',
      description: 'Versatilidade e estilo em uma peça',
      placeholder: '300x400'
    },
    {
      id: 8,
      category: 'masculino',
      title: 'Blazer Casual',
      description: 'Conforto e elegância para o dia a dia',
      placeholder: '300x400'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'feminino', name: 'Feminino' },
    { id: 'masculino', name: 'Masculino' },
    { id: 'acessorios', name: 'Acessórios' }
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">NOSSA GALERIA</h2>
          <p className="gallery-subtitle">
            Confira alguns dos nossos produtos mais exclusivos
          </p>
        </div>

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <div className="image-placeholder">
                  <span>{item.placeholder}</span>
                  <div className="placeholder-text">
                    Imagem do produto<br />
                    <small>(Placeholder - substitua pela imagem real)</small>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="view-more">Ver Detalhes</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta">
          <h3>GOSTOU DO QUE VIU?</h3>
          <p>Visite nossa loja e descubra muito mais</p>
          <button 
            className="visit-store-button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            VISITE NOSSA LOJA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;