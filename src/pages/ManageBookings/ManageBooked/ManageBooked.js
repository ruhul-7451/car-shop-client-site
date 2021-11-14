import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const deleteLogo = <FontAwesomeIcon icon={faTrashAlt} />
const confirmLogo = <FontAwesomeIcon icon={faCheckCircle} />

const handleDelete = (id) => {
    const url = `http://localhost:5000/bookings/find/${id}`
    const action = window.confirm('You are deleting one of your booking')
    if (action) {
        axios.delete(url);
    }
    console.log(url);
}

const handleConfirmation = (id) => {
    const url = `http://localhost:5000/bookings/find/${id}`
    axios.put(url);
}

const ManageBooked = ({ booking }) => {
    const { _id, address, city, date, email, model, name, phone, status } = booking
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{model}</td>
                <td>{date}</td>
                <td>{city}</td>
                <td>{address}</td>
                <td>{status}</td>
                <td><Button onClick={() => handleConfirmation(_id)} variant="outline-success">{confirmLogo}</Button></td>
                <td><Button onClick={() => handleDelete(_id)} variant="danger">{deleteLogo}</Button></td>
            </tr>
        </tbody>
    );
};

export default ManageBooked;