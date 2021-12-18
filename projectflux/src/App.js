import React from "react";
import { BrowserRouter } from 'react-router-dom';

import GloalStyle from './styles/global';
import Headers from "./componets/Header";
import Routes from "./routes";


function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes />
      <GloalStyle />
    </BrowserRouter>
  );
}

export default App;
