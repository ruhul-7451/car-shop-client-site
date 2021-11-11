import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UserReview = ({ user }) => {
    const { name, email, phone } = user
    return (
        <Col>
            <Card>
                {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                    <Card.Text>{phone}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default UserReview;