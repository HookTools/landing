import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
        <Main />
      <Footer />
    </div>
  );
}

export default App;
