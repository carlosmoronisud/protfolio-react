import React from 'react';
import DesignAccordion from './DesignAccordion';
import FrontAccordion from './FrontAccordion';
import BackAccordion from './BackAccordion';
import DataScienceAccordion from './DataScienceAccordion';
import './Accordion.css'; // Estilos compartilhados
import BusniesRpa from './BusniesRpa';

const SkillsAccordion = () => {
  return (
    <div className="skills-accordion-container">
      <h2 id='pro' className="skills-section-title">Habilidades & Projetos</h2>
      
      {/* Design */}
      <DesignAccordion />
      
      {/* Front-End */}
      <FrontAccordion />      
      
      {/* Back-End */}
      <BackAccordion />

      {/* BusniesRPA */}
      <BusniesRpa/>
      
      {/* Data Science & IA */}
      <DataScienceAccordion />
    </div>
  );
};

export default SkillsAccordion;