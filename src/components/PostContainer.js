import React, { Component } from 'react';
import { Avatar, Card, CardContent, Grid } from '@material-ui/core';
import { SignUpForm } from './SignUpForm';
import * as contentful from 'contentful';
import * as showdown from 'showdown';

import Post from './Post';
import './PostContainer.css';

export class PostContainer extends Component {
    state = {
        body: '',
        title: '',
        featuredMedia: {},
        author: {},
        authorProfilePic: {}
    }

    client = contentful.createClient({
        space: '',
        accessToken: ''
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
                <Grid id='container' container spacing={10}>
                    <Grid id='post-grid-item' item sx={12} md={8}>
                        <Post title={this.state.title} featuredMedia={this.state.featuredMedia} body={this.state.body}></Post>
                    </Grid>
                    <Grid container item sx={12} md={3} direction='column'>
                        <Grid id='signup-form-grid-item' item>
                            <SignUpForm></SignUpForm>
                        </Grid>
                        <Grid id='about-author-grid-item' item>
                            <Card id='author-card'>
                                <CardContent>
                                    <Avatar id='author-avatar' src={this.state.authorProfilePic.url}>
                                        {this.state.author.firstName}
                                    </Avatar>
                                    <p id='author-about'>{this.state.author.about}</p>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
        )
    }
}

export default PostContainer;
