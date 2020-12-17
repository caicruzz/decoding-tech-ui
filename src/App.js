import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import PostContainer from './components/PostContainer';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
                <Navbar/>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/post/:uri' render={(props) => <PostContainer uri={props.match.params.uri}/>}/>
                    <Route exact path='/'>
                        <Redirect to='/home'/>
                    </Route>
                    <Route path='*'>
                        <NotFoundPage/>
                    </Route>
                </Switch>
                <Footer/>
            </ThemeProvider>
        </div>
    );
}

export default App;
