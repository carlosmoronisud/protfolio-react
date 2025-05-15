import React, { useState, useRef } from 'react';
import './Accordion.css';
import data from '../../data/designData.json';
import { motion } from 'framer-motion';

// Ícones de ferramentas
import figmaIcon from '../../../assets/images/figma.png';
import illustratorIcon from '../../../assets/images/ilust.png';
import photoshopIcon from '../../../assets/images/photos.png';
import canvaIcon from '../../../assets/images/canva.png';
import iconFigma from '../../../assets/images/figma.png';
import iconMedium from '../../../assets/images/me.png';
import iconApp from '../../../assets/images/apps.png';

const DesignAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const formationRefs = useRef([]);
  const projectRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scroll = (ref, index, direction) => {
    const currentRef = ref.current[index];
    if (currentRef) {
      const scrollAmount = currentRef.offsetWidth / 3 + 16;
      currentRef.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const accordionData = [
    {
      title: "Design",
      tools: [
        { name: "Figma", icon: figmaIcon },
        { name: "Illustrator", icon: illustratorIcon },
        { name: "Photoshop", icon: photoshopIcon },
        { name: "Canva", icon: canvaIcon }
      ],
      formations: data.formacoes.map(formacao => ({
        image: formacao.imagem,
        description: formacao.titulo,
        link: formacao.link
      })),
      projects: data.projetos.map(projeto => ({
        image: projeto.imagem,
        title: projeto.titulo,
        description: projeto.descricao,
        links: projeto.links
      })),
    }
  ];

  return (
    <motion.div 
      className="accordion-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {accordionData.map((item, index) => (
        <motion.div 
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="accordion-header" 
            onClick={() => toggleAccordion(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{item.title}</span>
            <div className="accordion-tools">
              {item.tools.map((tool, i) => (
                <motion.img 
                  src={tool.icon} 
                  alt={tool.name} 
                  key={i} 
                  className="tool-icon" 
                  title={tool.name}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              ))}
            </div>
            <span className="accordion-indicator">
              {activeIndex === index ? '−' : '+'}
            </span>
          </motion.div>

          <motion.div 
            className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: activeIndex === index ? 'auto' : 0,
              opacity: activeIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Formações */}
            {item.formations.length > 0 && (
              <motion.div 
                className="section-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3>Formações</h3>
                <div className="carousel-wrapper">
                  <button className="carousel-btn prev" onClick={() => scroll(formationRefs, index, 'prev')}>&#10094;</button>
                  <div
                    className="carousel"
                    ref={el => (formationRefs.current[index] = el)}
                  >
                    {item.formations.map((formation, i) => (
                      <motion.a
                        href={formation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={i}
                        className="education-card"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.3 }}
                      >
                        <img src={formation.image} alt="Formação" loading="lazy" />
                        <p className="education-title">{formation.description}</p>
                      </motion.a>
                    ))}
                  </div>
                  <button className="carousel-btn next" onClick={() => scroll(formationRefs, index, 'next')}>&#10095;</button>
                </div>
              </motion.div>
            )}

            {/* Projetos */}
            {item.projects.length > 0 && (
              <motion.div 
                className="section-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3>Projetos</h3>
                <div className="carousel-wrapper">
                  <button className="carousel-btn prev" onClick={() => scroll(projectRefs, index, 'prev')}>&#10094;</button>
                  <div
                    className="carousel"
                    ref={el => (projectRefs.current[index] = el)}
                  >
                    {item.projects.map((project, i) => (
                      <motion.div 
                        className="project-card" 
                        key={i}
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.4 }}
                      >
                        <img src={project.image} alt={project.title} loading="lazy" />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className="project-links">
                          {project.links.medium && (
                            <motion.a 
                              href={project.links.medium} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                            >
                              <img src={iconMedium} alt="Medium" />
                            </motion.a>
                          )}
                          {project.links.figma && (
                            <motion.a 
                              href={project.links.figma} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                            >
                              <img src={iconFigma} alt="Figma" />
                            </motion.a>
                          )}
                          {project.links.aplicacao && (
                            <motion.a 
                              href={project.links.aplicacao} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                            >
                              <img src={iconApp} alt="Aplicação" />
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <button className="carousel-btn next" onClick={() => scroll(projectRefs, index, 'next')}>&#10095;</button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DesignAccordion;