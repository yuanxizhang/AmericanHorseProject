import React from 'react';
import { Link } from 'react-router-dom';
import ahp_hero from '../ahp_hero.mp4';
import './Landing.css';

const Landing = () => {
    
    return (
        <div>
            <video id="background-video" loop autoPlay muted>
                <source src={ahp_hero} type="video/mp4" />
            </video>
            <header class="viewport-header">
                <h1>
                    Adopt a horse today
                </h1>
            </header>
        
        </div>
    );
}

export default Landing;
