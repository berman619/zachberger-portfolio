import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Content from './pages/Content';
import Footer from './components/Footer';
import { AnimatePresence } from "framer-motion";
import './index.css';

function App() {
  return (
    <AnimatePresence>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Header />
          <Content />
          <Footer />
          </div>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;