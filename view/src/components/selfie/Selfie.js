import React from 'react';
import './Selfie.css';
import selfie from '../../assets/images/selfie.jpg';

const Selfie = () => {
    return (
        <>
            <div className='selfieContainer container'>
                <img src={selfie} id='selfie' alt='selfie'></img>
            </div>
        </>
    )
}

export default Selfie;