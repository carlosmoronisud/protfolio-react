import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './Accordion.css';
import data from '../../data/dataScienceData.json';

// Ícones de ferramentas
import powerBIIcon from '../../../assets/images/pb.png';
import lookerIcon from '../../../assets/images/looker.png';
import excelIcon from '../../../assets/images/exel.png';
import sqlIcon from '../../../assets/images/mysql.png';
import pythonIcon from '../../../assets/images/py.png';
import pandasIcon from '../../../assets/images/pandas.png';

// Ícones de links
import linkIcon from '../../../assets/images/dem.png';
import loadingIcon from '../../../assets/images/carregando.png';

const DataScienceAccordion = () => {
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
      title: "Data Science & IA",
      tools: [
        { name: "Power BI", icon: powerBIIcon },
        { name: "Looker Studio", icon: lookerIcon },
        { name: "Excel", icon: excelIcon },
        { name: "SQL", icon: sqlIcon },
        { name: "Python", icon: pythonIcon },
        { name: "Pandas", icon: pandasIcon }
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
            <motion.span
              className="accordion-indicator"
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeIndex === index ? '−' : '+'}
            </motion.span>
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
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + 0.4 }}
                      >
                        <img src={project.image} alt={project.title} loading="lazy" />
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className="project-links">
                          {project.links.site && (
                            <motion.a
                              href={project.links.site}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                            >
                              <img src={linkIcon} alt="Site do projeto" />
                            </motion.a>
                          )}
                          {Object.keys(project.links).length === 0 && (
                            <motion.img
                              src={loadingIcon}
                              alt="Em desenvolvimento"
                              title="Em desenvolvimento"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 1 }}
                            />
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

export default DataScienceAccordion;