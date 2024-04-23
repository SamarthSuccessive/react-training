// 13.Design and implement a Modal component in React. Allow customization of the modal content and provide options to open, close, and toggle the modal. Use this component to display various types of content.


import React, { useState } from 'react'
import Modal from './Modal';

function Ques13() {
    const [open,setOpen]=useState(false);
    const openModal = () => {
        setOpen(true);
      };
    
      const closeModal = () => {
        setOpen(false);
      };
  return (
    <>
    <div>Ques13</div>
    <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={open} onClose={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </>
  )
}

export default Ques13