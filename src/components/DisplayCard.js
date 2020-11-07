import React from 'react';

import { Card, CardContent, CardActions, Button, makeStyles } from '@material-ui/core';
import Image from 'material-ui-image';

import './DisplayCard.css';

export function DisplayCard(props) {
    const useStyles = makeStyles((theme) => ({
        blueFont: {
            color: '#3679ff',
        },
    }));

    const classes = useStyles();
    const featuredMedia = props.blogPost.fields.featuredMedia.fields;
    const blogPost = props.blogPost.fields;

    return (
        <Card className='display-card'>
            <Image src={featuredMedia.file.url} alt='featured blog post image' aspectRatio={(16/9)}/>
            <CardContent>
                <h3>{ blogPost.title }</h3>
                <p>{`${blogPost.preview}...`}</p>
            </CardContent>
            <CardActions>
                <Button size='medium' className={classes.blueFont}>
                    Read
                </Button>
            </CardActions>
        </Card>
    )
}
