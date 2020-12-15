import React from 'react';

import { Card, CardContent } from '@material-ui/core';

import './Post.css'
import Image from 'material-ui-image';

export function Post(props) {
    return (
        <div>
            <h1 id='title'>{props.title}</h1>
            <Image id='post-featured-media' src={props.featuredMedia} alt='blog post main image' aspectRatio={(16/9)}/>
            <Card id='post-body'>
                <CardContent>
                    <div id="body" dangerouslySetInnerHTML={{__html: props.body}}/>
                </CardContent>
            </Card>
        </div>
    )
}

export default Post
