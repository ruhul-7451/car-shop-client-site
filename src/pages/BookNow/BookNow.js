import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const BookNow = () => {
    const { user } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const { carName } = useParams()
    const onSubmit = data => {
        reset();
        alert('Congratulations! Your have requested a schedule.');
        history.push('/home');
        console.log(data);
    }
    const handleGoHome = () => {
        const confirm = window.confirm('Are you sure? \nYou want to skip booking!')
        if (confirm) {
            history.push('/home');
        }
    }
    return (
        <div className="bg-white">
            <Col className="bg-light mx-auto p-5">
                <h1 className="text-center">Book Your Test Drive</h1> <hr />
                <Form onSubmit={handleSubmit(onSubmit)} className="col-lg-7 mx-auto">
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter Name" value={user.displayName} {...register("name", { required: true })} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={user.email} {...register("email", { required: true })} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Present Address</Form.Label>
                        <Form.Control placeholder="1234 Dhanmondi" {...register("address", { required: true })} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder="Phone" {...register("phone", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" {...register("date", { required: true })} />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Model Name</Form.Label>
                            <Form.Control placeholder="Model" value={carName} {...register("model", { required: true })} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="City" {...register("city", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control placeholder="code" {...register("zip", { required: true })} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Check type="checkbox" label="I agree to Terms and Conditions" {...register("agree", { required: true })} />
                    </Form.Group>
                    <Form.Control type="hidden" value="pending" {...register("status")} />

                    <Form.Group className="d-flex justify-content-between align-items-center">
                        <Button variant="success" type="submit">Book Schedule</Button>
                        <Button onClick={handleGoHome} variant="danger">Go Home</Button>
                    </Form.Group>
                </Form>
            </Col>
        </div >
    );
};

export default BookNow;