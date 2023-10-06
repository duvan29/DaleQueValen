"use client";
import Icon from "@/assets/icons/icon";
import { useRef } from "react";

export function Carousel({ children, useFlexStyle }) {
  const carouselRef = useRef(null);

  function next() {
    if (!carouselRef.current) return;

    if (carouselRef?.current?.children?.length > 0) {
      const firstElement = carouselRef?.current?.children[0];
      carouselRef.current.style.transition = "300ms ease-out all";

      const size = carouselRef.current.children[0].clientWidth;

      carouselRef.current.style.transform = `translatex(-${size}px)`;

      const transicion = () => {
        if (!carouselRef.current) return;

        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = "translatex(0px)";

        carouselRef.current.appendChild(firstElement);
        carouselRef.current.removeEventListener("transitionend", transicion);
      };

      carouselRef.current.addEventListener("transitionend", transicion);
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

      carouselRef.current.style.transition = "none";

      const size = carouselRef.current.children[0].clientWidth;
      carouselRef.current.style.transform = `translate(-${size}px)`;

      setTimeout(() => {
        if (!carouselRef.current) return;

        carouselRef.current.style.transition = "300ms ease-out all";
        carouselRef.current.style.transform = "translatex(0)";
      }, 30);
    }
  }

  if (!children.length) return;

  return (
    <>
      <div className="flex relative items-center">
        <button
          onClick={() => previus()}
          className="lg:w-[162px] md:w-[100px] lg:h-[140px] lg:pr-[0px]  lg:pt-[40px]  lg:pb-[40px] lg:pl-[40px] md:p-[5px] ms:p-[15px]  ms:w-[60px] ms:h-[60px] flex justify-start items-center text-gray hover:text-black"
        >
          <Icon icon="ArrowL" />
        </button>
        <div className="overflow-hidden w-full">
          <div
            ref={carouselRef}
            className="flex flex-nowrap justify-between min-h-[50px] "
          >
            {children.map((child, i) => {
              return (
                <div
                  key={i}
                  className={`min-w-full ${
                    useFlexStyle === true
                      ? "overflow-hidden"
                      : useFlexStyle === false
                      ? "ms:min-w-[calc(100%/2)] md:min-w-[calc(100%/3)] lg:min-w-[calc(100%/4)] px-1 grid place-content-center overflow-hidden"
                      : "ms:min-w-[calc(100%/1)] lg:min-w-[calc(100%/2)] wl:min-w-[calc(100%/3)] xl:min-w-[calc(100%/4)] px-5 grid place-content-center overflow-hidden"
                  }`}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => next()}
          className="lg:w-[162px] lg:h-[140px] md:w-[100px]  lg:pr-[40px]  lg:pt-[40px]  lg:pb-[40px] lg:pl-[0px] md:p-[5px] ms:p-[15px] ms:w-[60px] ms:h-[60px] flex justify-end items-center  text-gray hover:text-black"
        >
          <Icon icon="ArrowR" />
        </button>
      </div>
    </>
  );
}
