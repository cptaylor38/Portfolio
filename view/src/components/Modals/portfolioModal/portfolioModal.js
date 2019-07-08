import React from 'react';
import ReactDOM from 'react-dom';
import './portfolioModal.css';
import { FaWindowClose } from 'react-icons/fa'
const root = document.querySelector('#root');

const Modal = ({ isShowing, hide, data }) => isShowing ? ReactDOM.createPortal(

    < React.Fragment >
        <div className="modal" id='portfolioModal' />
        <div className='modal-overlay'></div>
        <div className="modal-wrapper pfModalWrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal-header pfModalHeader">
                <h3>{data.title}</h3>
                <button type="button" className="modal-close-button" id='pfModalClose' data-dismiss="modal" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true"><FaWindowClose /></span>
                </button>
            </div>
            <div className="modal-content pfModalContent">
                <div id='projectDescription'>
                    <p>{data.body}</p>
                    <h5>Tech:</h5>
                    <p>{data.tech}</p>
                </div>

            </div>
        </div>
    </React.Fragment >, root
) : null;

export default Modal;