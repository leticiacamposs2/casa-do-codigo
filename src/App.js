import React from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

import Home from './pages/Home';
import Header from './components/Header';

const App = () => {

  return(
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
