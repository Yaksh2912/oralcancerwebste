import React from 'react';
import '../assets/styles/About.css';
import noseandthroat from '../assets/images/noseandthroat.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">  
    <div className="info-section">
      <div className="info-text">
        <h2> {t('about_heading')} </h2>
        <p>
          {t('about_content')}
        </p>
        <button className="read-more"> {t('about_button')} </button>
      </div>
      <img src={noseandthroat} alt="AI Detection Diagram" className="info-image" />
    </div>
    </section>
  );
};

export default About;