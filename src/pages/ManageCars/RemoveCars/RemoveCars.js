import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';

const deleteLogo = <FontAwesomeIcon icon={faTrashAlt} />

const RemoveCars = ({ car }) => {
    const { modelName, manufacturer, year, price } = car.data
    const handleDelete = (id) => {
        const url = `https://fierce-basin-08872.herokuapp.com/cars/find/${id}`
        const action = window.confirm('You are deleting one of your booking')
        if (action) {
            axios.delete(url)
                .then(function (response) {
                    if (response.data.deletedCount > 0) {
                        alert('Deleted Successfully')
                    }
                })
        }
    }
    return (
        <tbody>
            <tr>
                <td>{modelName}</td>
                <td>{manufacturer}</td>
                <td>{year}</td>
                <td>{price}</td>
                <td><Button onClick={() => handleDelete(car._id)} variant="danger">{deleteLogo} Stock Out</Button></td>
            </tr>
        </tbody>
    );
};

export default RemoveCars;