import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Booked from './Booked/Booked';

const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/bookings/search?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user.email])

    return (
        <div>
            <h3 className="mb-3 bg-light p-3 rounded text-dark">You scheduled {bookings.length} cars</h3>
            <Table className="  bg-white" striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Model Name</th>
                        <th>Date</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    bookings.map(booking => <Booked key={booking._id} booking={booking}></Booked>)
                }
            </Table>
        </div>
    );
};

export default MyBookings;