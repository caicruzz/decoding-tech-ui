import React, {Component} from 'react';

import Pagination from '@material-ui/lab/Pagination';
import {Container, Grid} from '@material-ui/core';
import {Client} from '../contentful/client';
import {DisplayCard} from './DisplayCard';

import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: [],
            totalItems: 0
        }

        this.calculateNumberOfTotalPages = this.calculateNumberOfTotalPages.bind(this);
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
        this.getBlogPosts = this.getBlogPosts.bind(this);
    }

    componentDidMount() {
        this.getBlogPosts(0);
    }

    handlePaginationChange(e, selectedPage) {
        const skip = this.calculateBlogPostsToSkip(selectedPage);
        this.getBlogPosts(skip);
        window.scrollTo(0, 0);
    }

    calculateBlogPostsToSkip(selectedPage) {
        // on the first page skip 1 (featured post), other pages skip the previous page 6 posts plus the featured post
        return selectedPage === 1 ? 0 : ((selectedPage - 1) * 4);
    }

    getBlogPosts(skip) {
        Client.contentful.getEntries({
            content_type: 'blogPost',
            order: '-sys.createdAt',
            limit: 4,
            skip
        })
            .then((response) => {
                const blogPosts = response.items;
                const totalItems = response.total;
                this.setState({blogPosts, totalItems})
            })
            .catch(console.error)
    }

    calculateNumberOfTotalPages() {
        return Math.ceil(this.state.totalItems / 4)
    }

    render() {
        let blogPostCards;

        if (this.state.blogPosts.length > 0) {
            blogPostCards = this.state.blogPosts.map(bp => (
                <Grid item sm={12} key={bp.sys.id}>
                    <DisplayCard blogPost={bp}/>
                </Grid>
            ));
        }

        return (
            <div>
                <Container id='home-container'>
                    <Grid id='blog-posts-grid' className='grid-container' container spacing={4}>
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
