import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMakeAdmin = () => {
        const user = { email }
        axios.put('http://localhost:5000/users/admin', user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <Form className="mx-auto">
            <Row className="align-items-center">
                <Col sm={5} xs="auto">
                    <Form.Control onBlur={handleEmail} placeholder="Enter email" type="email" />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button variant="danger" onClick={handleMakeAdmin}>Make Admin</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default MakeAdmin;