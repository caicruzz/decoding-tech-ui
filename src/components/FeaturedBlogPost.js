import React from 'react';
import {Link} from "react-router-dom";
import Image from "material-ui-image";

import './FeaturedBlogPost.css'

export default function FeaturedBlogPost(props) {
    return (
        <div>
            <Link className='button-link' to={{pathname: `/post/${props.featuredBlogPostUri}`}}>
                <Image id='featured-media' src={props.featuredMedia} alt='featured blog post image' aspectRatio={(16/9)}/>
            </Link>
            <h1 id='featured-post-title'>
                {props.featuredBlogPostTitle}
            </h1>
        </div>
    );
}