import React from 'react';

import YoutubeLogo from '../yt-logo.png';
import InstagramLogo from '../instagram-logo.png';
import GitHubLogo from '../github-logo.png';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div id='footer'>
            <div id='social-media-icons'>
                <a href='https://go.decodingtech.io/YTSubscribe' target='_blank' rel='noopener noreferrer'>
                    <img className='social-media-logo' src={YoutubeLogo} alt='YouTube logo'/>
                </a>
                <a href='https://go.decodingtech.io/instagram' target='_blank' rel='noopener noreferrer'>
                    <img className='social-media-logo' src={InstagramLogo} alt='Instagram logo'/>
                </a>
                <a href='https://go.decodingtech.io/github' target='_blank' rel='noopener noreferrer'>
                    <img className='social-media-logo' src={GitHubLogo} alt='GitHub logo'/>
                </a>
            </div>
            <div id='links-container'>
                <a className='links' href='https://go.decodingtech.io/terms-and-conditions' target='_blank' rel='noopener noreferrer'>Terms and Conditions</a>
                <a className='links' href='https://go.decodingtech.io/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>
                <a className='links' >Copyright {currentYear} - Decoding Tech</a>
            </div>
        </div>
    )
}

export default Footer;