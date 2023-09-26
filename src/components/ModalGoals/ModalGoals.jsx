'use client';
import React, { useState, useRef, useEffect } from 'react';
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
    <>
      <div>
        <button onClick={openModal}>
          <IconText icon={icon} text={textIcon} isActive={isOpen} />
        </button>
      </div>
      {isOpen && (
        <div
          className=" inset-0 border-none rounded-md border flex items-end justify-center px-3 pb-7 ease-in-out duration-600"
        >
          <div className="w-full h-[65px] bg-purple border-none rounded-md border flex items-center p-3 px-[25px] py-[10px]">
            <h4 className="text-white text-center ms:text-[12px]">{description}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalGoals;
