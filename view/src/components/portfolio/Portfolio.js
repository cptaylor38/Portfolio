import React from 'react';
import './Portfolio.css';
import { FaArrowCircleRight } from 'react-icons/fa';

const Portfolio = () => {

    return (
        <>
            <div className='portfolioContainer container'>
                <h3 id='portNav'>
                    <span type='button' id='portfolioButton'>
                        Portfolio
                        <div id='arrowHolder'><FaArrowCircleRight /></div>
                    </span>

                </h3>
            </div>
        </>
    )
}

export default Portfolio;