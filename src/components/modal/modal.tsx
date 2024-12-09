import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid black',
        padding: '1rem',
        backgroundColor: 'white',
        zIndex: 1000,
      }}
    >
      <button onClick={onClose}>Close Modal</button>
      {children}
    </div>
  );
};

export default Modal;
