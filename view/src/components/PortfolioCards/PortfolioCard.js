import React from 'react';
import { Card } from 'react-bootstrap';
import './PortfolioCard.css';
import { FaSearchPlus } from 'react-icons/fa';
import PortfolioModal from '../Modals/portfolioModal/portfolioModal';
import useModal from '../../modalHook/useModal';

const PortfolioCard = ({ data, setSelectedCard }) => {
    const { isShowing, toggle } = useModal();

    return (
        <Card>
            <div className='cardOverlay'></div>
            <Card.Img variant="top" src={require(`../../assets/images/${data.image}`)} id='cardImage' />
            <Card.Body>
                <Card.Title id='cardTitle'>{data.title}</Card.Title>
                <Card.Text className='linksBody'>
                    <a href={'' + data.githubLink} target='_blank' rel="noopener noreferrer">Repository</a> | <a href={'' + data.deployedLink} target='_blank' rel="noopener noreferrer">Visit Site</a>
                </Card.Text>
            </Card.Body>
            <Card.Footer id='cardFooter'>
                <button id='enhanceBtn' onClick={toggle}><span>View Details  <FaSearchPlus /></span></button>
                <PortfolioModal
                    isShowing={isShowing}
                    hide={toggle}
                    data={data}
                />
            </Card.Footer>
        </Card>
    )
}

export default PortfolioCard;