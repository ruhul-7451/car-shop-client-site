import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import SingleCar from './SingleCar/SingleCar';

const ShowCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://fierce-basin-08872.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    if (cars.length === 0) {
        return <div className="text-center p-5"><Spinner variant="primary" animation="border" /> <h3 className="text-primary py-3">Loading...</h3></div>
    }
    return (
        <div className="p-5">
            <h1 className="bg-info text-white text-center p-3 rounded">We have {cars.length} car's ready in stock!</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    cars.map(car => <SingleCar
                        key={car._id}
                        car={car}
                    ></SingleCar>)
                }
            </Row>
        </div>
    );
};

export default ShowCars;