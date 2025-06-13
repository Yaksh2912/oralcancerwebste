import React from 'react';
import '../assets/styles/Ribbon.css';
import { useTranslation } from 'react-i18next';
  
const HindiRibbon = () => {
  const { t } = useTranslation();
  
  return (
    <div className="section2">
      <p>
        {t('ribbon')}
      </p>
    </div>
  );
};

export default HindiRibbon;