import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import SingleCar from '../../ShowCars/SingleCar/SingleCar';

const DisplayCars = () => {
    const [displayCars, setDisplayCars] = useState([]);
    useEffect(() => {
        fetch('https://fierce-basin-08872.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setDisplayCars(data.slice(0, 6)))
    }, [])
    if (displayCars.length === 0) {
        return <div className="text-center p-5"><Spinner variant="secondary" animation="border" /> <h3 className="text-secondary py-3">Loading...</h3></div>
    }
    return (
        <div>
            <h2 className="text-white rounded bg-dark mt-3 p-3 text-center mx-auto col-11">People's Choice 2021</h2>
            <Row xs={1} md={2} lg={3} className="g-4 bg-white px-5 pb-5 m-0">
                {
                    displayCars.map(car => <SingleCar
                        key={car._id}
                        car={car}
                    ></SingleCar>)
                }
            </Row>
        </div>
    );
};

export default DisplayCars;