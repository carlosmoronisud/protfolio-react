import React from 'react'
import './About.css'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import linkedinIcon from '../../assets/images/in.png';
import behanceIcon from '../../assets/images/be.png';
import mediumIcon from '../../assets/images/me.png';
import githubIcon from '../../assets/images/git.png';
import whatsappIcon from '../../assets/images/zap.png';
import cvIcon from '../../assets/images/pdf.png';



const About = () => {
  const { t } = useTranslation()

  return (
    <section id="abo" className="container">
      <motion.div
        className="links"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
       <ul>
  <li>
    <a
      href="https://www.linkedin.com/in/carlosmoronigarcia/"
      className="in"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={linkedinIcon} alt="LinkedIn" />
    </a>
  </li>
  <li>
    <a
      href="https://www.behance.net/carlosgarcia533"
      className="be"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={behanceIcon} alt="Behance" />
    </a>
  </li>
  <li>
    <a
      href="https://medium.com/@carlosmoronisud"
      className="med"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={mediumIcon} alt="Medium" />
    </a>
  </li>
  <li>
    <a
      href="http://github.com/carlosmoronisud"
      className="git"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={githubIcon} alt="GitHub" />
    </a>
  </li>
  <li>
    <a
      href="https://wa.me/5519988735558"
      className="zap"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  </li>
  <li>
    <a
      href="https://drive.google.com/file/d/1NLf638HKMwecBZCgctCeHwaHUdHBfWdF/view?usp=drive_link"
      className="cv"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={cvIcon} alt="CV" />
      
    </a>
  </li>
</ul>
      </motion.div>

      <motion.div
        className="aboContent"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="aboIntro">{t('about.intro')}</p>
        <p className="aboFinal">{t('about.final')}</p>
      </motion.div>
    </section>
  )
}

export default About
