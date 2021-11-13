import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';

const PostReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState('');
    console.log(rating);
    const onSubmit = data => {
        console.log(data);
        reset();
        setRating('');
        // axios.post('url', { data })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    };

    return (
        <div className="col-lg-8 mx-auto shadow p-5 mx-5 bg-white rounded">
            <h2 className="text-center text-danger">Write A Review</h2> <hr />
            <Form onSubmit={handleSubmit(onSubmit)} className="fw-bold">
                <Row className="mb-3">
                    <Form.Group as={Col} sm={12} xs="auto">
                        <Form.Label>Review Title</Form.Label>
                        <Form.Control placeholder="Title" {...register("reviewTitle")} />
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} sm={4} xs="auto">
                        <Form.Label>Rating</Form.Label> <br />
                        <Form.Control value={rating} placeholder="0/5" {...register("rate")} hidden />
                        <Rating empty="fa fa-star-o custom custom-empty" full="fa fa-star custom custom-full" fractions={2} stop={5}
                            onChange={(rate) => setRating(rate)} placeholderRating={rating} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group xs="auto">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} {...register("description")} />
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