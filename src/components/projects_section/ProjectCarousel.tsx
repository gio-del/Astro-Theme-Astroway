import React, { useEffect } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjectCard";
import { info } from "../../data/info";

interface ProjectCarouselProps {
  projects: (typeof info)["projects"];
}

function CustomArrow(props: any) {
  const { onClick, left } = props;

  return (
    <div
      className={`${
        left ? "-left-10" : "-right-10"
      } absolute top-1/2 transform -translate-y-1/2 z-10`}
    >
      <button
        onClick={onClick}
        className="w-8 h-8 rounded-full flex justify-center items-center"
        aria-label={left ? "Previous Slide" : "Next Slide"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            "h-6 w-6 text-secondary dark:text-dk-secondary" +
            (!left ? " rotate-180" : "")
          }
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
}

export default function ProjectCarousel(props: ProjectCarouselProps) {
  const { projects } = props;
  const initialMount = React.useRef(true);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    lazyLoad: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow left />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10 mb-5">My Projects</h1>
      <div className="flex justify-center flex-col items-center">
        <div className="slider-container w-5/6">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <ProjectCard key={index} project={project} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
