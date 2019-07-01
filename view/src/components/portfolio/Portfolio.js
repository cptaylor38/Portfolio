import React from 'react';
import './Portfolio.css';
import { FaArrowCircleRight } from 'react-icons/fa';

const Portfolio = ({ setPage }) => {

    const launchPortfolio = () => {
        setPage('portfolio');
    }

    return (
        <>
            <div className='portfolioContainer container'>
                <h3 id='portNav'>
                    <span type='button' onClick={() => launchPortfolio()} id='portfolioButton'>
                        Portfolio
                        <div id='arrowHolder'><FaArrowCircleRight /></div>
                    </span>

                </h3>
            </div>
        </>
    )
}

export default Portfolio;