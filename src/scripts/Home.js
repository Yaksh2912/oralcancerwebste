import React from 'react';
import '../assets/styles/Home.css';
import doctors from '../assets/images/doctors.jpg';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <section id="home">
    <div className="hero">
      <img src={doctors} alt="Doctors" className="hero-img" />
      <div className="hero-content">
        <h2> {t('home_heading')} </h2>
        <p>
          {t('home_content')}
        </p>
      </div>
    </div>
    </section>
  );
};

export default Home;