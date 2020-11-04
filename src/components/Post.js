import React, { Component } from 'react';

import { Avatar, Card, CardContent, Grid } from '@material-ui/core';
import {SignUpForm} from "./SignUpForm";

import * as contentful from 'contentful';
import * as showdown from 'showdown';

export class Post extends Component {


    render() {
        return (
            <div>
                <h1 style={{display: 'block'}}>{this.props.title}</h1>
                <img src={this.props.featuredMedia}
                     style={{width: '100%', borderRadius: '10px', display: 'block'}}
                     alt='alt text'></img>
                <Card style={{marginTop: '3%'}}>
                    <CardContent>
                        <div id="body" dangerouslySetInnerHTML={{__html: this.props.body}}></div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Post
