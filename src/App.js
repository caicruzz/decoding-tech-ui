import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import PostContainer from './components/PostContainer';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './App.css';

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
        <a href="/home">home</a>
        <br/>
        <a href="/post">post</a>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/post/:uri' render={(props) => <PostContainer uri={props.match.params.uri}></PostContainer>}>
            </Route>
          </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
