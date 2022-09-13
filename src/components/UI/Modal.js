import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onHideCart}/>;
  };
  
  const ModalOverlay = (props) => {
    return (
      <div className='modal'>
        <div className='content'>{props.children}</div>
      </div>
    );
  };
  
  const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal