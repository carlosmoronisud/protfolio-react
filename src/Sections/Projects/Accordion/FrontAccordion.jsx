import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Accordion.css';
import data from '../../data/frontData.json';

// Ícones de ferramentas
import htmlIcon from '../../../assets/images/html.png';
import cssIcon from '../../../assets/images/css.png';
import jsIcon from '../../../assets/images/js.png';
import reactIcon from '../../../assets/images/reac.png';
import bootstrapIcon from '../../../assets/images/boot.png';
import typescriptIcon from '../../../assets/images/type.png';

// Ícones de links
import githubIcon from '../../../assets/images/git.png';
import figmaIcon from '../../../assets/images/figma.png';
import appIcon from '../../../assets/images/apps.png';

const FrontAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const formationRefs = useRef([]);
  const projectRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scroll = (ref, index, direction) => {
    const currentRef = ref.current[index];
    if (currentRef) {
      const scrollAmount = currentRef.offsetWidth / 300 + 16;
      currentRef.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const accordionData = [
    {
      title: "Front-End",
      tools: [
        { name: "HTML", icon: htmlIcon },
        { name: "CSS", icon: cssIcon },
        { name: "JavaScript", icon: jsIcon },
        { name: "React", icon: reactIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "TypeScript", icon: typescriptIcon }
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
      }))
    }
  ];

  return (
    <motion.div
      className="accordion-container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {accordionData.map((item, index) => (
        <motion.div
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
            whileHover={{ 
              scale: 1.02, 
              backgroundColor: 'rgba(0,0,0,0.05)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span layout="position">{item.title}</motion.span>
            <div className="accordion-tools">
              {item.tools.map((tool, i) => (
                <motion.img
                  src={tool.icon}
                  alt={tool.name}
                  key={i}
                  className="tool-icon"
                  title={tool.name}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                />
              ))}
            </div>
            <motion.span
              className="accordion-indicator"
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeIndex === index ? '−' : '+'}
            </motion.span>
          </motion.div>

          <motion.div
            className="accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === index ? 'auto' : 0,
              opacity: activeIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Seção de Formações */}
            {item.formations.length > 0 && (
              <motion.div
                className="section-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3>Formações</h3>
                <div className="carousel-wrapper">
                  <motion.button
                    className="carousel-btn prev"
                    onClick={() => scroll(formationRefs, index, 'prev')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    &#10094;
                  </motion.button>
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
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.3 }}
                        whileHover={{ 
                          y: -5, 
                          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.img
                          src={formation.image}
                          alt={formation.description}
                          loading="lazy"
                          whileHover={{ scale: 1.05 }}
                        />
                        <p className="education-title">{formation.description}</p>
                      </motion.a>
                    ))}
                  </div>
                  <motion.button
                    className="carousel-btn next"
                    onClick={() => scroll(formationRefs, index, 'next')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    &#10095;
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Seção de Projetos */}
            {item.projects.length > 0 && (
              <motion.div
                className="section-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3>Projetos</h3>
                <div className="carousel-wrapper">
                  <motion.button
                    className="carousel-btn prev"
                    onClick={() => scroll(projectRefs, index, 'prev')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    &#10094;
                  </motion.button>
                  <div
                    className="carousel"
                    ref={el => (projectRefs.current[index] = el)}
                  >
                    {item.projects.map((project, i) => (
                      <motion.div
                        className="project-card"
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.4 }}
                        whileHover={{ 
                          y: -5, 
                          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          whileHover={{ scale: 1.03 }}
                        />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className="project-links">
                          {project.links.github && (
                            <motion.a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Ver no GitHub"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <img src={githubIcon} alt="GitHub" />
                            </motion.a>
                          )}
                          {project.links.aplicacao && (
                            <motion.a
                              href={project.links.aplicacao}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Ver aplicação"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <img src={appIcon} alt="Aplicação" />
                            </motion.a>
                          )}
                          {project.links.figma && (
                            <motion.a
                              href={project.links.figma}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Ver no Figma"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <img src={figmaIcon} alt="Figma" />
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    className="carousel-btn next"
                    onClick={() => scroll(projectRefs, index, 'next')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    &#10095;
                  </motion.button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FrontAccordion;