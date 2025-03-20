import React, { useEffect } from "react";
import Card from "../components/Card";
import projects from "../dataDesign.json";
import { NavLink } from "react-router-dom";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Design() {
  return (
    <div className="section design">
      <div className="container">
        <NavLink to="/" className="btn text-light mb-5">
          <svg
            className="me-2"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          back
        </NavLink>
        <div>
          {projects.map((item, i) => (
            <div className="design-item" key={i}>
              <h2>{item.title}</h2>
              <div className="swipe mb-4">
                <Swiper
                  pagination={{
                    type: "progressbar",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                  spaceBetween={50}
                  slidesPerView={1}
                >
                  {item.imgs.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="img-wrapper">
                        <img src={`../${img}`} alt={img} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Design;
