import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';
import banner3 from '../../../assets/banner3.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='bg-secondary rounded p-3 bg-opacity-50'>
                        <div>
                            <h3 className='fw-bold'>Eat Your Way to Better Health</h3>
                            <p>Discover the Power of Nutrient-Dense Foods</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='bg-secondary rounded p-3 bg-opacity-50'>
                        <div>
                            <h3 className='fw-bold'>Eat Your Way to Better Health</h3>
                            <p>Discover the Power of Nutrient-Dense Foods</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className='bg-secondary rounded p-3 bg-opacity-50'>
                        <div>
                            <h3 className='fw-bold'>Eat Your Way to Better Health</h3>
                            <p>Discover the Power of Nutrient-Dense Foods</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;