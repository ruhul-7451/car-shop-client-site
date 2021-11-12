import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from '../shared/Banner/Banner';
import ShowCars from '../ShowCars/ShowCars';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>Buy Cars</h2>
            <ShowCars></ShowCars>
            <Reviews></Reviews>
            <h2>Book Test Drive</h2>
        </div>
    );
};

export default Homepage;