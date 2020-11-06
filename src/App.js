import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#334772',
      main: '#fff',
      // main: '#041c4c',
      dark: '#001137',
      contrastText: '#000',
    }
  }
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Home></Home>
      </ThemeProvider>
    </div>
  );
}

export default App;
