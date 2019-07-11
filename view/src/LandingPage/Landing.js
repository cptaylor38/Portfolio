import React from 'react';
import './Landing.css';
import Bio from '../components/bio/Bio';
import Intro from '../components/intro/Intro';
import Contact from '../components/contact/Contact';
import Links from '../components/links/Links';
import Location from '../components/location/Location';
import Selfie from '../components/selfie/Selfie';
import Logo from '../components/logo/Logo';
import Resume from '../components/resume/Resume';
import Portfolio from '../components/portfolio/Portfolio';
import PortfolioPage from '../PortfolioPage/PortfolioPage';

const Landing = () => {

    return (
        <>
            <div className='container-fluid' id='landingContents'>
                <div id='svgContainer'></div>
                <Logo />
                <Intro />
                <Links />
                <Resume />
                <Selfie />
                <Portfolio />
                <Location />
                <Bio />
                <Contact />
            </div >
            <PortfolioPage />
        </>
    );

}

export default Landing;