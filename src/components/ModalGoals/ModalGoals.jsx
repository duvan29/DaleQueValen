'use client';
import { useState, useRef, useEffect } from 'react';

const ModalGoals = ({ children, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <button onClick={openModal}>{children}</button>
      {/* {isOpen && (
        <div
          className="w-[202px] mt-6 h-[100px] bg-purple border-none rounded-md border flex items-center p-3  px-[25px] py-[10px] absolute top-[90px] ease-in-out duration-600 z-10"
          ref={modalRef}
        >
          <div className="relative w-auto max-w-sm md:max-w-lg lg:max-w-2xl mx-auto my-6">
            <div className="modal-content">
              <div className="modal-header"></div>
              <div className="modal-body">
                <h4 className="text-white text-center ms:text-[12px] ">
                  {description}
                </h4>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ModalGoals;
