import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Pagecart } from './components/Pagecart';
import { GlobalStyle } from './styles/Global';
import  CountProvider  from './countContext';

function App() {
  return (
    <CountProvider>
      
      <Header />
      <Main />
      
      <GlobalStyle />
   </CountProvider>
  );
}

export default App;
