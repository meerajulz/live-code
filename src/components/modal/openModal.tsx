import React, { useState } from 'react';
import Modal from './modal';

const OpenModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  //   we need a button to open the modal
  const handleOpen = () => {
    setIsOpen(true);
    console.log('open modal', isOpen);
  };

  // we need contet for modal

  // we need control close button from the modal
  const handleClose = () => {
    setIsOpen(false);
    console.log('close modal');
  };

  return (
    <div>
      <h1>Open Modal</h1>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        Here is my modal
      </Modal>
    </div>
  );
};

export default OpenModal;
