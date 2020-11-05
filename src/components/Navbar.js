import React from 'react';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import logo from '../logo.png'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <img id='logo' src={logo} alt='Decoding Tech Logo'/>
                    <Typography variant='h5'>
                        Decoding Tech
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
