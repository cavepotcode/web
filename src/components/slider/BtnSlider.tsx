import React from "react";
import "./Slider.scss";
import { AllImages } from '../../helpers';

export function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? AllImages.RightArrow : AllImages.LeftArrow} />
    </button>
  );
}