import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageBooked from './ManageBooked/ManageBooked';

const ManageBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [])
    return (
        <div>
            <h3 className="mb-3 bg-light p-3 rounded text-dark">Total Placed Bookings: {allBookings.length}</h3>
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
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    allBookings.map(booking => <ManageBooked key={booking._id} booking={booking}></ManageBooked>)
                }
            </Table>
        </div>
    );
};

export default ManageBookings;