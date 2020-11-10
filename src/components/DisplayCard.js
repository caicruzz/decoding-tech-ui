import React from 'react';
import {Link} from 'react-router-dom'

import { Card, CardContent, CardActions } from '@material-ui/core';
import Image from 'material-ui-image';

import './DisplayCard.css';

export function DisplayCard({blogPost}) {
    const featuredMedia = blogPost.fields.featuredMedia.fields;

    return (
        <Card className='display-card'>
            <Image src={featuredMedia.file.url} alt='featured blog post image' aspectRatio={(16/9)}/>
            <CardContent>
                <h3>{ blogPost.fields.title }</h3>
                <p>{`${blogPost.fields.preview}...`}</p>
            </CardContent>
            <CardActions>
                <Link to={{ pathname: `/post/${blogPost.fields.uri}` }}>Read</Link>
            </CardActions>
        </Card>
    )
}
