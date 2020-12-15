import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import {Link} from 'react-router-dom';
import logo from '../logoWithText.png';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <Link id='home-link' to='/home'>
                        <img id='logo' src={logo} alt='Decoding Tech Logo'/>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
