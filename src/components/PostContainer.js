import React, { Component } from 'react';
import { Avatar, Card, CardContent, Grid } from '@material-ui/core';
import { SignUpForm } from './SignUpForm';
import * as contentful from 'contentful';
import * as showdown from 'showdown';

import Post from './Post';

export class PostContainer extends Component {
    state = {
        body: '',
        title: '',
        featuredMedia: {},
        author: {},
        authorProfilePic: {}
    }

    client = contentful.createClient({
        space: 'zokp22j9sjdt',
        accessToken: 'wwUiQGspUTpYQb3H92AJdBKajq_wUcMabdl_G5FwsRc'
    });

    componentDidMount() {
        const converter = new showdown.Converter();
        this.client.getEntries({
            content_type: 'blogPost'
        }).then(response => {
            console.log(response);
            const post = response.items[0].fields;
            console.log(post.authors[0].fields.profilePicture.fields);
            this.setState({
                title: post.title,
                body: converter.makeHtml(post.body),
                featuredMedia: post.featuredMedia.fields.file.url,
                author: post.authors[0].fields,
                authorProfilePic: post.authors[0].fields.profilePicture.fields.file
            })});
    }

    render() {
        return (
            <div style={{padding: '1% 4%'}}>
                <Grid container spacing={10}>
                    <Grid item sx={12} md={8} style={{margin: '0 2%'}}>
                        <Post title={this.state.title} featuredMedia={this.state.featuredMedia} body={this.state.body}></Post>
                    </Grid>
                    <Grid container item sx={12} md={3} direction='column'>
                        <Grid item style={{marginBottom: '30%'}}>
                            <SignUpForm></SignUpForm>
                        </Grid>
                        <Grid item style={{ position: 'relative'}}>
                            <Card style={{ alignContent:"center", width: '100%', textAlign: 'center'}}>
                                <CardContent style={{}}>
                                    <Avatar style={{height: '150px', width: '150px', position: 'absolute', top: '-20%', left: '30%'}}
                                            src={this.state.authorProfilePic.url}>{this.state.author.firstName}</Avatar>
                                    <p style={{marginTop: '20%'}}>{this.state.author.about}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default PostContainer;
