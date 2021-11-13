import React from 'react';
import Contacts from '../Contacts/Contacts';
import Reviews from '../Reviews/Reviews';
import Banner from '../shared/Banner/Banner';
import DisplayCars from '../shared/DisplayCars/DisplayCars';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <DisplayCars></DisplayCars>
            <Reviews></Reviews>
            <Contacts></Contacts>
        </div>
    );
};

export default Homepage;