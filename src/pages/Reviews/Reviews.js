import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import UserReview from './UserReview/UserReview';

const Reviews = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return (
        <div className='bg-light text-center p-5'>
            <h1>Total Reviews {users.length}</h1>
            <Row xs={1} md={2} lg={3} className="g-4 py-5">{users.map(user => <UserReview
                key={user.id}
                user={user}
            ></UserReview>)}</Row>
        </div >
    );
};

export default Reviews;