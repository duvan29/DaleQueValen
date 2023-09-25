'use client';
import { useState, useRef, useEffect } from 'react';
import IconText from '../IconText';

const ModalGoals = ({ icon, textIcon, description }) => {
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
    <div className="">
      <button onClick={openModal}>
        <IconText icon={icon} text={textIcon} isActive={isOpen} />
      </button>
      <div>
        {isOpen && (
          <div className="">
            <div
              className=" w-[380px] h-[100px] bg-purple border-none rounded-md border flex items-center p-3 px-[25px] py-[10px] ease-in-out duration-600 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              ref={modalRef}
            >
              <h4 className="text-white text-center ms:text-[12px]">
                {description}
              </h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalGoals;
