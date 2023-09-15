'use client';
import { useRef } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


export function Carousel({ children }) {
  const carouselRef = useRef(null);

  function next() {
    if (!carouselRef.current) return;

    if (carouselRef?.current?.children?.length > 0) {
      const firstElement = carouselRef?.current?.children[0];
      carouselRef.current.style.transition = '300ms ease-out all';

      const size = carouselRef.current.children[0].clientWidth;

      carouselRef.current.style.transform = `translatex(-${size}px)`;

      const transicion = () => {
        if (!carouselRef.current) return;

        carouselRef.current.style.transition = 'none';
        carouselRef.current.style.transform = 'translatex(0px)';

        carouselRef.current.appendChild(firstElement);
        carouselRef.current.removeEventListener('transitionend', transicion);
      };

      carouselRef.current.addEventListener('transitionend', transicion);
    }
  }
  function previus() {
    if (!carouselRef.current) return;

    if (carouselRef?.current?.children.length > 0) {
      const endElement =
        carouselRef.current.children[carouselRef.current.children.length - 1];
      carouselRef.current.insertBefore(
        endElement,
        carouselRef?.current?.firstChild
      );

      carouselRef.current.style.transition = 'none';

      const size = carouselRef.current.children[0].clientWidth;
      carouselRef.current.style.transform = `translate(-${size}px)`;

      setTimeout(() => {
        if (!carouselRef.current) return;

        carouselRef.current.style.transition = '300ms ease-out all';
        carouselRef.current.style.transform = 'translatex(0)';
      }, 30);
    }
  }

  if (!children.length) return;

  return (
    <>
      <div className="flex relative items-center">
        <button
          onClick={() => previus()}
          className='w-[140px] h-[140px] p-2 flex justify-start items-center hover:text-white'
        >
          <BsChevronCompactLeft size="50%" />
        </button>
        <div className="overflow-hidden w-full">
          <div
            ref={carouselRef}
            className="flex flex-nowrap justify-start min-h-[50px]"
          >
            {children.map((child, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    i < 4 ? '' : ''
                  } min-w-full overflow-hidden`}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => next()}
          className='w-[140px] h-[140px] flex justify-end items-center p-2 hover:text-white'
        >
          <BsChevronCompactRight size="50%" />
        </button>
      </div>
    </>
  );
}
