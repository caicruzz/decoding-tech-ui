import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Navbar from './components/Navbar';
import './App.css';
import PostContainer from "./components/PostContainer";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#334772',
      main: '#041c4c',
      dark: '#001137',
      contrastText: '#fff',
    }
  }
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <PostContainer></PostContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
