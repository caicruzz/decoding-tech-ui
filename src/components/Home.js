import React, { Component } from 'react';

import { Container, Grid, Card, CardContent } from '@material-ui/core';

import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <div id='featured-media-container'>
                    <img id='featured-media' src="https://images.hdqwalls.com/download/i-love-coding-xl-1920x1080.jpg" alt="featured media"/>
                </div>
                <Container>
                    <Grid className='grid-container' container>
                        <Grid item>
                            <Card>
                                <CardContent></CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            )
    }
}

export default Home;