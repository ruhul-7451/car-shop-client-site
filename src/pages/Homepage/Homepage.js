import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from '../shared/Banner/Banner';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>Buy Cars</h2>
            <Reviews></Reviews>
            <h2>Book Test Drive</h2>
        </div>
    );
};

export default Homepage;