
import slide2 from "./Slide2.jpg"
import slide3 from "./Slide3.jpg"

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from "react"
import "./slider.css"

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block  "
                    src={slide2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>We are here to have your notes</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block "
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Save all your notes here</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel