import React from 'react';
import useModal from '../../modalHook/useModal';
import ContactModal from '../Modals/contactModal/contactModal';
import './Contact.css';
import { FaWeixin } from 'react-icons/fa';

const Contact = () => {

    const { isShowing, toggle } = useModal();

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
                />
            </div>
        </>
    )
}

export default Contact;