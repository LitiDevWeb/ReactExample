import React from 'react';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Container from './components/container/container';
import '@fontsource/montserrat';
import './app.scss';

const App = () => {
  return (
    <div>
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
};

export default App;
