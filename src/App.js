import React from 'react';
import Navbar from './scripts/Navbar';
import Home from './scripts/Home';
import Ribbon from './scripts/Ribbon';
import About from './scripts/About';
import Howitworks from './scripts/Howitworks';
import ContactForm from './scripts/ContactForm';
import Footer from './scripts/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Ribbon />
      <About />
      <Howitworks />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
