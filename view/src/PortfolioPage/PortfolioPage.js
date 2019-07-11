import React, { useState, useEffect } from 'react';
import './PortfolioPage.css';
import projectData from '../assets/json/portfolio';
import { Jumbotron, Container } from 'react-bootstrap';
import PortfolioCard from '../components/PortfolioCards/PortfolioCard';

const PortfolioPage = () => {
    const [cardsData, setCardsData] = useState(null);

    useEffect(() => setCardsData(projectData), []);

    return (
        <div className='container-fluid' id='portfolioContents'>
            <div id='svgContainer'></div>
            <Jumbotron fluid id='viewJumbo'>
                <Container id='viewContainer'>

                </Container>
            </Jumbotron>
            <Jumbotron fluid id='selectorJumbo'>
                {cardsData ? cardsData.map(item => <PortfolioCard key={item.id} data={item} />) : "Loading"}
            </Jumbotron>
        </div>
    )
}

export default PortfolioPage;