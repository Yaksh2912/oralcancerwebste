import React from 'react';
import '../assets/styles/ContactForm.css';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  return (
    <section id="contact">
    <div className="contact-form">
      <form>
        <div className='name-row'>
          <input type="text" placeholder={t('form_firstname')} required />
          <input type="text" placeholder={t('form_lastname')} required />
        </div>
        <input type="tel" placeholder={t('form_mobile')} required />
        <input type="email" placeholder={t('form_email')} required />
        <textarea placeholder={t('form_message')} rows="4" />
        <button type="submit"> {t('form_button')} </button>
      </form>
    </div>
    </section>
  );
};

export default ContactForm;