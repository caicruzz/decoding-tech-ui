import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import PostContainer from './components/PostContainer';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ReactGA from 'react-ga';

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

ReactGA.initialize(process.env.REACT_APP_GAID, {gaOptions: {siteSpeedSampleRate: 100}});

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    })

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
