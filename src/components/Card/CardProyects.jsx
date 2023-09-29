import React from 'react';

function ProyectoCard({ project, onClick, isActive }) {
  const buttonClass = isActive
    ? 'bg-orange rounded-t-lg px-4 py-2'
    : 'bg-orange-20 text-black-50 hover:text-black hover:bg-orange rounded-t-lg px-4 py-2';

  return (
    <div className="flex flex-row">
      <button className={buttonClass} onClick={() => onClick(project.id)}>
        <h2 className='lg:text-[24px] md:text-[20px] ms:text-[14px]'>
            {project.title}
        </h2>
      </button>
    </div>
  );
}

export default ProyectoCard;
