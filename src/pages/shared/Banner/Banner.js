import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src="https://i.ibb.co/0fYyNPk/banner-img-1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src="https://i.ibb.co/VNQ5YXT/banner-img-2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src="https://i.ibb.co/L5qvph3/banner-img-3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;