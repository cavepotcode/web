import React, { useState } from 'react';
import './Slider.scss';
import { BtnSlider } from './BtnSlider';
import dataSlider from './dataSlider';
import { useTranslation } from 'react-i18next';

export default function Slider() {

    // const [t] = useTranslation("global");

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <label className="text-say">"{obj.text}"</label>
                        <div className="firm">
                            <label>{obj.firm}</label>
                        </div>
                        <div className="container-dots">
                            {Array.from({ length: 2 }).map((item, index) => (
                                <div
                                    onClick={() => moveDot(index + 1)}
                                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                                ></div>
                            ))}
                        </div>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />


        </div>
    )
}