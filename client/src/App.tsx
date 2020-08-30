import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle, { Header } from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Header>
      <h1>SportsX</h1>
    </Header>
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
