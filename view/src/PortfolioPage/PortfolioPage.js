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
                    <h1>Below are some of my favorite projects, using: </h1>
                    <ul id='techList'>
                        <li>Javascript/JQuery</li>
                        <li>Css/Bootstrap</li>
                        <li>React/Handlebars</li>
                        <li>MongoDb/MySQL</li>
                        <li>Ajax/Axios</li>
                        <li>Node/Express</li>
                    </ul>
                </Container>
            </Jumbotron>
            <Jumbotron fluid id='selectorJumbo'>
                {cardsData ? cardsData.map(item => <PortfolioCard key={item.id} data={item} />) : "Loading"}
            </Jumbotron>
        </div>
    )
}

export default PortfolioPage;