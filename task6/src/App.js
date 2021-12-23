import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import ContentWrapper from './components/ContentWrapper.jsx';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.wrapper}>
      <Navbar />
      <ContentWrapper />
    </div>
  );
}

export default App;
