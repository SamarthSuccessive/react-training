import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null; // Don't render anything if modal is closed
  }

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
