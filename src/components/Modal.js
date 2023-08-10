import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && event.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 bg-black">
      <div className="modal-content max-h-[50rem] bg-white rounded-md shadow-lg mx-8 my-16 w-full max-w-screen-lg overflow-y-auto">
        <span className="close-button mr-6 mt-2" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;