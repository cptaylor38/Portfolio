import React from 'react';
import './Links.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Links = () => {

    return (
        <>
            <div className='linksContainer container'>
                <a href='https://github.com/cptaylor38' title='Github' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/corbin-taylor-419a8a188/' title='LinkedIn' target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
        </>
    )
}

export default Links;