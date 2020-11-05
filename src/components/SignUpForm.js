import React from 'react';
import {Button, Container, Grid, Paper, TextField} from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import './SignUpForm.css';

export function SignUpForm() {
    return (
        <Paper id='newsletter-container'>
            <h1>Newsletter</h1>
            <Container>
                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <AccountCircleRoundedIcon/>
                    </Grid>
                    <Grid item>
                        <TextField id='name-input' label='Name'/>
                    </Grid>
                </Grid>
                <Grid container spacing={1} alignItems='flex-end'>
                    <Grid item>
                        <EmailRoundedIcon/>
                    </Grid>
                    <Grid item>
                        <TextField id='email-input' label='Email'/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid id='submit-button-grid-item' item>
                        <Button variant='contained' color='secondary'>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}
