import React from 'react';
import ReactDOM from 'react-dom';
import './contactModal.css';
import { FaWindowClose } from 'react-icons/fa'
const root = document.querySelector('#root');

const Modal = ({ isShowing, hide, handleChange, handleSubmit }) => isShowing ? ReactDOM.createPortal(

    < React.Fragment >
        <div className="modal contactModal" />
        <div className='modal-overlay'></div>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal-header">
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true"><FaWindowClose /></span>
                </button>
            </div>
            <div className="modal-content">
                <div>
                    <form id='contactForm' onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={handleChange} />
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={handleChange} />
                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email" onChange={handleChange} />
                        <label>Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." onChange={handleChange}></textarea>
                        <button type="submit" id='contactformBtn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </React.Fragment >, root
) : null;

export default Modal;