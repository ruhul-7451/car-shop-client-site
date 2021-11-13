import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const UserReview = ({ user }) => {
    console.log(user);
    const { userName, rates, reviewTitle, description } = user.data
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>{reviewTitle}</Card.Title>
                    <Rating placeholderRating={rates} readonly />
                    <Card.Text className="fw-bold">Review By: {userName}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default UserReview;