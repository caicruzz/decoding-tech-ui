import React from 'react';
import {Link} from 'react-router-dom'

import {Card, CardContent, CardActions, Button, createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors';
import Image from 'material-ui-image';

import './DisplayCard.css';

export function DisplayCard({blogPost}) {
    const featuredMedia = blogPost.fields.featuredMedia.fields;
    const theme = createMuiTheme({
        palette: {
            primary: blue,
        },
    });

    return (
        <Card className='display-card'>
            <Link className='button-link' to={{pathname: `/post/${blogPost.fields.uri}`}}>
                <Image src={featuredMedia.file.url} alt='featured blog post image' aspectRatio={(16 / 9)}/>
            </Link>
            <CardContent>
                <h3>{blogPost.fields.title}</h3>
                <p>{`${blogPost.fields.preview}...`}</p>
            </CardContent>
            <CardActions>
                <ThemeProvider theme={theme}>
                    <Link className='button-link' to={{pathname: `/post/${blogPost.fields.uri}`}}>
                        <Button variant='contained' color='primary' size='large'>
                            Read
                        </Button>
                    </Link>
                </ThemeProvider>
            </CardActions>
        </Card>
    )
}
