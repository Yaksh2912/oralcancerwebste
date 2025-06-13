import React from 'react';
import '../assets/styles/Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-section section-links">
        <h2>{t('footer_heading_1')}</h2>
        <a href="https://nhm.gov.in" target="_blank" rel="noopener noreferrer">{t('link1')}</a>
        <a href="https://ntcp.nhp.gov.in" target="_blank" rel="noopener noreferrer">{t('link2')}</a>
        <a href="http://nhsrcindia.org/" target="_blank" rel="noopener noreferrer">{t('link3')}</a>
        <a href="https://tmc.gov.in" target="_blank" rel="noopener noreferrer">{t('link4')}</a>
        <a href="https://fctc.who.int/" target="_blank" rel="noopener noreferrer">{t('link5')}</a>
        <a href="https://gco.iarc.fr/" target="_blank" rel="noopener noreferrer">{t('link6')}</a>
        <a href="#" target="_blank" rel="noopener noreferrer">{t('link')}</a>
      </div>

      <div className="footer-section section-contact">
        <h2>{t('footer_heading2')}</h2>
        <p>{t('location')}</p>
        <p>{t('address')}</p>
        <p>{t('contacts')}</p>
      </div>

      <div className="footer-section section-reach">
        <h2>{t('footer_heading3')}</h2>
        <p>{t('by_air')}</p>
        <p>{t('by_rail')}</p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {t('footer_end')} </p>
      </div>
    </footer>
  );
};

export default Footer;
