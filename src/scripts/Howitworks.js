import React from 'react';
import '../assets/styles/Howitworks.css';
import oralcancer from '../assets/images/oralcancer.png'
import { useTranslation } from 'react-i18next';

const Howitworks = () => {
  const { t } = useTranslation();
  return (
    <section id="how-it-works">
    <div className="how-it-works-wrapper">
      <div className="ribbon">
        <h2> {t('how_it_works_top')} </h2>
      </div>
      <div className="features">
        <div className='feature-box'>
          <img src={oralcancer} alt="Oral Scan" />
        </div>
      </div>
      <div className="text">
        <p>
           {t('how_it_works_content')}
        </p>
      </div>
    </div>
    </section>
  );
};

export default Howitworks;