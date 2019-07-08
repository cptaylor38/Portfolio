import React, { useState } from 'react';
import useModal from '../../modalHook/useModal';
import ContactModal from '../Modals/contactModal/contactModal';
import './Contact.css';
import { FaWeixin } from 'react-icons/fa';
const axios = require('axios');

const Contact = () => {

    const { isShowing, toggle } = useModal('');
    const [formData, setformData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        subject: ''
    })

    const handleChange = e => {
        console.log(e.target);
        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setformData({
            [e.target.name]: e.target.value
        })
        toggle(false);
        const form = await axios.post('/api/form',
            {
                first: formData.firstname,
                last: formData.lastname,
                email: formData.email,
                message: formData.subject
            });
    }

    return (
        <>
            <div className='contactContainer container'>
                <button type='button' id='contactModalBtn' onClick={toggle}>
                    <FaWeixin style={{ fontSize: '50px' }} />
                    <p>Contact</p>
                </button>
                <ContactModal
                    isShowing={isShowing}
                    hide={toggle}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </>
    )
}

export default Contact;