import React from 'react';
import { useParams } from 'react-router';

const ShowCarDetails = () => {
    const { carId } = useParams();

    return (
        <div>
            <h1>This car id is = {carId}</h1>
        </div>
    );
};

export default ShowCarDetails;