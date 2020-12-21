import React from 'react';

import {Avatar, Card, CardContent, Grid} from '@material-ui/core';
import {SignUpForm} from './SignUpForm';
import Post from './Post';

import * as showdown from 'showdown';
import './PostContainer.css';
import Client from "../contentful/client";

export class PostContainer extends React.Component {
    converter = new showdown.Converter();

    state = {
        title: '',
        body: '',
        featuredMedia: '',
        author: {},
        authorProfilePic: '',
        createdAt: ''
    }

    componentDidMount() {
        Client.contentful.getEntries({
            content_type: 'blogPost',
            'fields.uri[match]': this.props.uri
        }).then(r => this.setState({
            title: r.items[0].fields.title,
            body: r.items[0].fields.body,
            featuredMedia: r.items[0].fields.featuredMedia.fields.file.url,
            author: r.items[0].fields.authors[0].fields,
            authorProfilePic: r.items[0].fields.authors[0].fields.profilePicture.fields.file.url,
            createdAt: r.items[0].sys.createdAt
        }))
    }

    render() {
        return (
            <Grid id='container' container spacing={0}>
                <Grid id='post-grid-item' item sx={12} md={8}>
                    <Post
                        createdAt={this.state.createdAt}
                        title={this.state.title}
                        featuredMedia={this.state.featuredMedia}
                        body={this.converter.makeHtml(this.state.body)}/>
                </Grid>
                <Grid container item sx={12} md={3} direction='column'>
                    <Grid id='signup-form-grid-item' item>
                        <SignUpForm client={Client.sendInBlue}></SignUpForm>
                    </Grid>
                    <Grid id='about-author-grid-item' item>
                        <Card id='author-card'>
                            <CardContent>
                                <Avatar id='author-avatar'
                                        src={this.state.authorProfilePic}>
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
