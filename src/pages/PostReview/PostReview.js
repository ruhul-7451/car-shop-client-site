import axios from 'axios';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const PostReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
        axios.post('https://fierce-basin-08872.herokuapp.com/reviews', { data })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="col-lg-8 mx-auto shadow p-5 mx-5 bg-white rounded">
            <h2 className="text-center text-danger">Write A Review</h2> <hr />
            <Form onSubmit={handleSubmit(onSubmit)} className="fw-bold">
                <Row className="mb-3" hidden>
                    <Form.Group as={Col} sm={12} xs="auto">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control placeholder="name" value={user.displayName} {...register("userName")} />
                    </Form.Group>
                    <Form.Group as={Col} sm={12} xs="auto">
                        <Form.Label>User Email</Form.Label>
                        <Form.Control placeholder="email" value={user.email} {...register("userEmail")} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} sm={12} xs="auto">
                        <Form.Label>Review Title</Form.Label>
                        <Form.Control placeholder="Title" {...register("reviewTitle", { required: true })} />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} sm={4} xs="auto">
                        <Form.Label>Rating (Out of 5)</Form.Label> <br />
                        <Form.Control type="number" {...register("rates", { required: true })} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group xs="auto">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} {...register("description", { required: true })} />
                    </Form.Group>
                </Row>

                <Button variant="success" type="submit">
                    Post Review
                </Button>
            </Form>
        </div>
    );
};

export default PostReview;