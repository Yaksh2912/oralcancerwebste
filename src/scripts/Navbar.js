import React,{useState} from 'react';
import '../assets/styles/Navbar.css';
import ICMR from '../assets/images/icmr.png'
import fitindia from '../assets/images/fitindia.png'
import CDAC from '../assets/images/CDAC.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from '../scripts/LoginModal';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  const { t, i18n } = useTranslation();

  // Toggle hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };  

  // Scroll to specific section smoothly
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMenuOpen(false); // closes menu in mobile view
    }
};

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  return (
    <>
    <header>
      <div className="navbar-top">
        <div className="nav-left">
          <div  className="logo-container1">
            <img src={CDAC} alt="C-Dac logo" />
          </div>
          <div  className="logo-container2"> 
            <img src={ICMR} alt="ICMR" />
          </div>
        
        </div>
        <div className="nav-center">
          <img src={fitindia} alt="fit india" />
        </div>
        <div className="nav-right">
          <button className="login-btn" onClick={() => { setShowModal(true); setIsLogin(true); }}>{t('login')}</button>
          <button className="register-btn" onClick={() => { setShowModal(true); setIsLogin(false); }}>{t('register')}</button>
          
          <div className={`translate-dropdown ${dropdownOpen ? 'open' : ''}`} onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span>{i18n.language.toUpperCase()}</span> <span className="arrow">▼</span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <div onClick={() => handleLanguageChange('en')}>English</div>
                <div onClick={() => handleLanguageChange('hi')}>हिंदी</div>
              </div>
            )}
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* <nav className={`navbar-main ${menuOpen ? 'active' : ''}`}>
        <div className="nav-buttons">

          <button 
            className={activeSection === 'home' ? 'active-btn' : ''}
            onClick={() => scrollToSection('home')}
          >
            {t('home')}
          </button>

          <button
            className={activeSection === 'about' ? 'active-btn' : ''}
            onClick={() => scrollToSection('about')}
          >
            {t('about')}
          </button>
          
          <button
            className={activeSection === 'how-it-works' ? 'active-btn' : ''}
            onClick={() => scrollToSection('how-it-works')}
          >
            {t('how_it_works')}
          </button>
          
          <button
            className={activeSection === 'contact' ? 'active-btn' : ''}
            onClick={() => scrollToSection('contact')}
          >
            {t('Contact')}
          </button>

        </div>
      </nav> */}

      <LoginModal
        show={showModal}
        onClose={() => setShowModal(false)}
        isLogin={isLogin}
        toggleMode={() => setIsLogin((prev) => !prev)}
      />
    </header>

    <nav className={`navbar-main ${menuOpen ? 'active' : ''}`}>
        <div className="nav-buttons">

          <button 
            className={activeSection === 'home' ? 'active-btn' : ''}
            onClick={() => scrollToSection('home')}
          >
            {t('home')}
          </button>

          <button
            className={activeSection === 'about' ? 'active-btn' : ''}
            onClick={() => scrollToSection('about')}
          >
            {t('about')}
          </button>
          
          <button
            className={activeSection === 'how-it-works' ? 'active-btn' : ''}
            onClick={() => scrollToSection('how-it-works')}
          >
            {t('how_it_works')}
          </button>
          
          <button
            className={activeSection === 'contact' ? 'active-btn' : ''}
            onClick={() => scrollToSection('contact')}
          >
            {t('Contact')}
          </button>

        </div>
      </nav>
    </>
    
  );
};

export default Navbar;