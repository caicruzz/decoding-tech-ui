import React from 'react';

import NotFoundImg from '../404 not found.webp';
import Image from "material-ui-image";

export default function NotFoundPage() {
    return (
        <a href='/home'>
            <Image src={NotFoundImg} style={{width: '50em', marginTop: '3%', marginLeft: '30%'}} aspectRatio={(3/1)} alt='Not found image'></Image>
        </a>
    )
}