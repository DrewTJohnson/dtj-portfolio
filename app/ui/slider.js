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
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {props.children}
      </Slider>
    </div>
  )
}
