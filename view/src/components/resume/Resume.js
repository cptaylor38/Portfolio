import React from 'react';
import './Resume.css';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Resume = () => {
    return (
        <>
            <div className='resumeContainer container'>
                <a href='https://docs.google.com/document/d/1UeyafVj0o_w9heVp52pXpz6VLscIONGxZkswwEsCzyQ/export?format=pdf'><div>Resume</div> <FaCloudDownloadAlt /></a>
            </div>
        </>
    )
}

export default Resume;