import React from 'react';

import ThemeConfig from './theme/themeConfig';
import Router from './routes';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
};

export default App;
