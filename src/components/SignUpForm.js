import React, {Component} from 'react';
import {Grid, Paper, TextField, Container, Button} from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

export class SignUpForm extends Component {

    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <Paper>
                    <h1>Newsletter</h1>
                    <Container>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <AccountCircleRoundedIcon />
                            </Grid>
                            <Grid item>
                                <TextField id="name-input" label="Name" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <EmailRoundedIcon />
                            </Grid>
                            <Grid item>
                                <TextField id="email-input" label="Email" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item style={{margin: '15px 0'}}>
                                <Button variant="contained" color="secondary">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </div>
        )
    }
}
