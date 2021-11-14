import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        reset();
        axios.post('https://fierce-basin-08872.herokuapp.com/cars', { data })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="col-lg-8 mx-auto shadow p-5 mx-5 bg-white rounded">
            <h2 className="text-center text-danger">Add a Car Details</h2> <hr />
            <Form onSubmit={handleSubmit(onSubmit)} className="fw-bold">
                <Row className="mb-3">
                    <Form.Group as={Col} sm={5} xs="auto">
                        <Form.Label>Model Name</Form.Label>
                        <Form.Control placeholder="Model Name" {...register("modelName")} />
                    </Form.Group>

                    <Form.Group as={Col} sm={3} xs="auto">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Select defaultValue="Select" {...register("manufacturer")}>
                            <option>Toyota</option>
                            <option>Nissan</option>
                            <option>Honda</option>
                            <option>Mazda</option>
                            <option>Hyundai</option>
                            <option>Kia</option>
                            <option>Mercedes</option>
                            <option>BMW</option>
                            <option>Mitsubishi</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} sm={4} xs="auto">
                        <Form.Label>Production Year</Form.Label>
                        <Form.Control placeholder="Year" {...register("year")} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} sm={3} xs="auto">
                        <Form.Label>Engine Capacity (cc)</Form.Label>
                        <Form.Select defaultValue="Select" {...register("engineCapacity")}>
                            <option>1000</option>
                            <option>1200</option>
                            <option>1300</option>
                            <option>1500</option>
                            <option>1800</option>
                            <option>2000</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} sm={4} xs="auto">
                        <Form.Label>Transmission Type</Form.Label>
                        <Form.Select defaultValue="Select"{...register("transmission")}>
                            <option>Automatic</option>
                            <option>Manual</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} sm={5} xs="auto">
                        <Form.Label>Price</Form.Label>
                        <Form.Control placeholder="Price" {...register("price")} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} xs="auto" sm={12}>
                        <Form.Label>Car Image</Form.Label>
                        <Form.Control placeholder="Enter Image URL" {...register("carImg")} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group xs="auto">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} {...register("description")} />
                    </Form.Group>
                </Row>

                <Button variant="success" type="submit">
                    Add Details
                </Button>
            </Form>
        </div>
    );
};

export default AddCar;