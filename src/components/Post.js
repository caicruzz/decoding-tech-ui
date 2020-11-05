import React from 'react';

import { Card, CardContent } from '@material-ui/core';

import './Post.css'

export function Post(props) {
    return (
        <div>
            <h1 id='title'>{props.title}</h1>
            <img id='featured-media' src={props.featuredMedia} alt='alt text'/>
            <Card id='post-body'>
                <CardContent>
                    <div id="body" dangerouslySetInnerHTML={{__html: props.body}}/>
                </CardContent>
            </Card>
        </div>
    )
}

export default Post
