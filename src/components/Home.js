import React, {Component} from 'react';

import Pagination from '@material-ui/lab/Pagination';
import FeaturedBlogPost from './FeaturedBlogPost';
import {Container, Grid} from '@material-ui/core';
import {DisplayCard} from './DisplayCard';
import {Client} from '../contentful/client';

import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredBlogPost: null,
            featuredMedia: '',
            selectedPage: 1,
            otherBlogPosts: [],
            totalItems: 0
        }

        this.calculateNumberOfTotalPages = this.calculateNumberOfTotalPages.bind(this);
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
        this.getBlogPosts = this.getBlogPosts.bind(this);
    }

    componentDidMount() {
        Client.contentful.getEntries({
            content_type: 'blogPost',
            order: '-sys.createdAt',
            limit: 1
        })
            .then((response) => {
                const featuredBlogPost = response.items.slice(0, 1)[0];
                const featuredMedia = featuredBlogPost.fields.featuredMedia.fields.file.url;
                this.setState({featuredBlogPost, featuredMedia})
            })
            .catch(console.error)

        this.getBlogPosts(1);
    }

    handlePaginationChange(e, selectedPage) {
        const skip = this.calculateBlogPostsToSkip(selectedPage);
        this.getBlogPosts(skip);
        this.setState({selectedPage})
        window.scrollTo(0, 0);
    }

    calculateBlogPostsToSkip(selectedPage) {
        // on the first page skip 1 (featured post), other pages skip the previous page 6 posts plus the featured post
        return selectedPage === 1 ? 1 : ((selectedPage - 1) * 4) + 1
    }

    getBlogPosts(skip) {
        Client.contentful.getEntries({
            content_type: 'blogPost',
            order: 'sys.createdAt',
            limit: 4,
            skip
        })
            .then((response) => {
                const otherBlogPosts = response.items;
                const totalItems = response.total - 1;
                this.setState({otherBlogPosts, totalItems})
            })
            .catch(console.error)
    }

    calculateNumberOfTotalPages() {
        return Math.ceil(this.state.totalItems / 4)
    }

    render() {
        let blogPostCards = <div/>

        const featuredBlogPostUri = this.state.featuredBlogPost ? this.state.featuredBlogPost.fields.uri : '';
        const featuredBlogPostTitle = this.state.featuredBlogPost ? this.state.featuredBlogPost.fields.title : '';
        if (this.state.otherBlogPosts.length > 0) {
            blogPostCards = this.state.otherBlogPosts.map(bp => (
                <Grid item sm={12} md={12} key={bp.sys.id}>
                    <DisplayCard blogPost={bp}/>
                </Grid>
            ));
        }

        return (
            <div>
                <Container id='home-container'>
                    <div hidden={this.state.selectedPage !== 1}>
                        <FeaturedBlogPost
                            featuredBlogPostUri={featuredBlogPostUri}
                            featuredBlogPostTitle={featuredBlogPostTitle}
                            featuredMedia={this.state.featuredMedia}
                        />
                    </div>
                    <Grid id='blog-posts-grid' className='grid-container' container spacing={0}>
                        {blogPostCards}
                    </Grid>
                    <Grid container>
                        <Grid item sm={5}/>
                        <Grid item sm={7}>
                            <Pagination
                                count={this.calculateNumberOfTotalPages()}
                                color='secondary'
                                size='large'
                                onChange={this.handlePaginationChange}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Home;
