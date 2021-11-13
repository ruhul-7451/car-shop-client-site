import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
            <Row className="align-items-center">
                <Col sm={5} xs="auto">
                    <Form.Control placeholder="Enter email" type="email" {...register("email")} />
                </Col>
                <Col xs="auto" className="my-1">
                    <Button variant="danger" type="submit">Make Admin</Button>
                </Col>
            </Row>
        </Form>
    );
};

export default MakeAdmin;