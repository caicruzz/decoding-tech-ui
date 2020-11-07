import React, { Component } from 'react';

import {  Grid } from '@material-ui/core';
import { DisplayCard } from "./DisplayCard";
import * as contentful from 'contentful';
import Image from 'material-ui-image';

import './Home.css'

class Home extends Component {
    state = {
        featuredBlogPost: {},
        featuredMedia: '',
        otherBlogPosts: []
    }

    client = contentful.createClient({
        space: 'zokp22j9sjdt',
        accessToken: '6SEGX0XnOvDYffBvx3DM1ZdQoWVzHfGhJsR_3z07GTg'
    });

    componentDidMount() {
        this.client.getEntries({
            content_type: 'blogPost'
        })
            .then((response) => {
                const featuredBlogPost = response.items.slice(0,1)[0];
                const otherBlogPosts = response.items.slice(1);
                const featuredMedia = featuredBlogPost.fields.featuredMedia.fields.file.url;
                this.setState({ featuredBlogPost, featuredMedia, otherBlogPosts}, () => console.log(this.state))
            })
            .catch(console.error)
    }

    render() {
        let blogPostCards = <div></div>
        if (this.state.otherBlogPosts.length > 0) {
            blogPostCards = this.state.otherBlogPosts.map(bp => (
                <Grid item sm={12} md={4} key={bp.sys.id}>
                    <DisplayCard blogPost={bp}></DisplayCard>
                </Grid>
            ));
        }

        return (
            <div>
                <div id='featured-media-container'>
                    <Image id='featured-media' src={this.state.featuredMedia} alt='featured blog post image' aspectRatio={(16/9)}/>
                </div>
                <Grid id='blog-posts-grid' className='grid-container' container spacing={0}>
                    { blogPostCards }
                </Grid>
            </div>
            )
    }
}

export default Home;
