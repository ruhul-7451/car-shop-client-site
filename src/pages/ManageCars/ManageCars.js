import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import RemoveCars from './RemoveCars/RemoveCars';

const ManageCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://fierce-basin-08872.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    console.log(cars);
    return (
        <div>
            <h3 className="mb-3 bg-light p-3 rounded text-dark">Ready Stock Cars: {cars.length}</h3>
            <Table className="  bg-white" striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Model Name</th>
                        <th>Manufacturer</th>
                        <th>Model Year</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    cars.map(car => <RemoveCars key={car._id} car={car}></RemoveCars>)
                }
            </Table>
        </div>
    );
};

export default ManageCars;