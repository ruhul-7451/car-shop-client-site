import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import UserReview from './UserReview/UserReview';

const Reviews = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://fierce-basin-08872.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    if (users.length === 0) {
        return <div className="text-center p-5"><Spinner variant="primary" animation="border" /> <h3 className="text-primary py-3">Loading...</h3></div>
    }
    return (
        <div className='bg-light text-center p-5'>
            <h1 className="bg-success text-white p-3 rounded">Total {users.length} Customers Reviewed</h1>
            <Row xs={1} md={2} lg={3} className="g-4 py-5">{users.map(user => <UserReview
                key={user._id}
                user={user}
            ></UserReview>)}</Row>
        </div >
    );
};

export default Reviews;