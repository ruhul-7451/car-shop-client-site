import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleMakeAdmin = () => {
        const user = { email }
        axios.put('http://localhost:5000/users/admin', user)
            .then(function (response) {
                console.log(response);
                const { data } = response;
                if (data.modifiedCount === 1) {
                    setEmail('')
                    setSuccess(true)
                }
                if (data.matchedCount === 0) {
                    setEmail('')
                    setFailed(true)
                }
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
            {success && <Alert variant='success'>Admin Added Successfully</Alert>}
            {failed && <Alert variant='danger'>User not found</Alert>}
        </Form>
    );
};

export default MakeAdmin;