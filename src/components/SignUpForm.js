import React from 'react';
import {Button, Grid, Paper, TextField} from '@material-ui/core';

import './SignUpForm.css';

export class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email: '',
            showMessage: false,
            submitMessage: '',
            messageClass: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInputChange(event) {
        const {value, name} = event.target;
        this.setState({[name]: value}, () => {
            if (this.state.email) {
                if (!this.validateEmail(this.state.email)) {
                    this.setState({showMessage: true, submitMessage: 'Invalid Email', messageClass: 'error'});
                } else {
                    this.setState({showMessage: false})
                }
            }
        });
    }

    submit() {
        const firstName = this.state.firstName;
        this.props.client.createContact(this.state.email, {firstName})
            .then(r => {
                if (r.ok) {
                    this.setState({firstName: '', email: '', showMessage: true, submitMessage: 'Success!', messageClass: 'success'});
                } else {
                    this.setState({showMessage: true, submitMessage: 'Oops, something went wrong!', messageClass: 'error'});
                }
            })
            .then(_ => setTimeout(() => {
                this.setState({showMessage: false})
            }, 3000))
            .catch(e => console.error(e));
    }

    validateEmail(email) {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);
    }

    render() {
        return (
            <Paper id='newsletter-container'>
                <h1>Newsletter</h1>
                <div id='form-container'>
                    <Grid container>
                        <Grid item sm={12}>
                            <TextField
                                id='name-input'
                                value={this.state.firstName}
                                label='First Name'
                                name='firstName'
                                onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item sm={12}>
                            <TextField
                                id='email-input'
                                value={this.state.email}
                                label='Email'
                                name='email'
                                onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid id='submit-button-grid-item' item sm={12}>
                            <Button size='medium' disabled={this.state.showMessage} variant='contained' color='secondary' onClick={this.submit}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item sm={12}>
                            <p className={this.state.messageClass} hidden={!this.state.showMessage}>{this.state.submitMessage}</p>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        )
    }
}
