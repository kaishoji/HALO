import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button2';
import './HeroSection.css';

function HeroSection() {
    return(
        <div className='hero-container'>
            <video src='/video/clouds.mp4' autoPlay loop muted />
            <h1>Travel with Halo</h1>
            <p> flying made simple </p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> GET STARTED <i className='far fa-play-circle' /></Button>
                <Button2 className='btns-login' buttonStyle='btn--primary' buttonSize='btn--large'> GO TO LOG IN <i className='far fa-play-circle' /></Button2>
            </div>
        </div>
    )
}

export default HeroSection