import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Header.css';

import brasil from '../../assets/images/brasil.png';
import espanha from '../../assets/images/espanha.png';
import reinoUnido from '../../assets/images/reino-unido.png';
import micros from '../../assets/images/micros.png';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.style.setProperty('--lang-change', 'pulse 0.5s');
    setTimeout(() => {
      document.documentElement.style.removeProperty('--lang-change');
    }, 500);
  };

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const navVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div id="inicio" className="head">
        {/* Header superior, com idioma, título, foto, etc. */}
        <motion.div className="left-section" variants={itemVariants}>
          <motion.h3 
            className="site-title"
            whileHover={{ scale: 1.05 }}
          >
            {t('about.title')}
          </motion.h3>
          
          <motion.div 
            className="language-buttons"
            variants={containerVariants}
          >
            {/* Botões de idioma com flags */}
            <motion.button 
              onClick={() => changeLanguage('pt')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
            >
              <img src={brasil} alt="Português" />
            </motion.button>
            <motion.button 
              onClick={() => changeLanguage('en')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
            >
              <img src={reinoUnido} alt="English" />
            </motion.button>
            <motion.button 
              onClick={() => changeLanguage('es')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
            >
              <img src={espanha} alt="Español" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Menu hamburger */}
        <motion.div className="right-section" variants={itemVariants}>
          <motion.button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? t('Fechar menu') : t('Abrir menu')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span 
              className="bar"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            ></motion.span>
            <motion.span 
              className="bar"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            ></motion.span>
            <motion.span 
              className="bar"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            ></motion.span>
          </motion.button>

          {/* Menu de navegação desktop (sempre visível) */}
          <nav className="desktop-nav">
            <ul className="navContent">
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#abo">{t('about.sobre')}</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#pro">{t('about.formacao')}</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact">{t('about.contacto')}</a>
              </motion.li>
            </ul>
          </nav>

          {/* Menu de navegação mobile (apenas quando aberto) */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                className="mobile-nav"
                initial="closed"
                animate="open"
                exit="closed"
                variants={navVariants}
              >
                <ul className="navContent">
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#abo" onClick={() => setMenuOpen(false)}>{t('about.sobre')}</a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#pro" onClick={() => setMenuOpen(false)}>{t('about.formacao')}</a>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href="#contact" onClick={() => setMenuOpen(false)}>{t('about.contacto')}</a>
                  </motion.li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>

          {/* Imagem de perfil */}
          <motion.img 
            src={micros} 
            alt="Foto de perfil" 
            className="foto"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;