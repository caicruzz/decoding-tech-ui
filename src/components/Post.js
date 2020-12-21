import React from 'react';

import { Card, CardContent } from '@material-ui/core';
import Image from 'material-ui-image';

import './Post.css'

export default function Post(props) {
    return (
        <div>
            <h1 id='title'>{props.title}</h1>
            <h4 id='createdAt'>{new Date(props.createdAt).toDateString()}</h4>
            <Image id='post-featured-media' src={props.featuredMedia} alt='blog post main image' aspectRatio={(16/9)}/>
            <Card id='post-body'>
                <CardContent>
                    <div id="body" dangerouslySetInnerHTML={{__html: props.body}}/>
                </CardContent>
            </Card>
        </div>
    )
}