'use client'

import React, { Component } from "react";
import Slider from "react-slick";

export default function CenteredSlider(props) {

  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  )
}
