import React from 'react';

import NotFoundImg from '../logo.png';
import Image from "material-ui-image";
import './NotFoundPage.css';
import {Container} from "@material-ui/core";

export default function NotFoundPage() {
    return (
        <Container id='not-found'>
            <a href='/home'>
                <Image src={NotFoundImg} aspectRatio={(1/1)} alt='Not found image'></Image>
            </a>
            <h1>That page does not exist...</h1>
            <h3>Click the logo to go home!😊</h3>
        </Container>
    )
}