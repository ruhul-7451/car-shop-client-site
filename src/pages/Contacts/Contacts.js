import axios from 'axios';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Contacts = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        console.log(data);
        axios.post('https://fierce-basin-08872.herokuapp.com/messages', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        reset();
        alert('We will be contacting you soon!');
        history.push('/home');
    }
    return (
        <Row xs={1} md={2} className="m-5 rounded shadow">
            <Col className="bg-light">
                <img src="https://i.ibb.co/RyZRgWZ/carBazar.png" className="img-fluid" alt="Car bazar logo" />
            </Col>
            <Col className="rounded p-5 bg-light">
                <h1 className="text-center text-white bg-danger rounded mb-5 py-3">Get in touch</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control placeholder="Enter Name" {...register("name", { required: true, maxLength: 20 })} />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder="Your Phone" {...register("phone", { required: true })} />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={5} {...register("message", { required: true })} />
                    </Form.Group>
                    <Button type="submit">Send Message</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default Contacts;