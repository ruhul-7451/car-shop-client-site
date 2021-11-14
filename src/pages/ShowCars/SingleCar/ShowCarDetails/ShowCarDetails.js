import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ShowCarDetails = () => {
    const { carId } = useParams();
    const history = useHistory();
    const [singleCarDetails, setSingleCarDetails] = useState({});
    useEffect(() => {
        const url = `https://fierce-basin-08872.herokuapp.com/showCar/${carId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleCarDetails(data.data))
    }, [carId]);

    const { carImg, description, engineCapacity, manufacturer, modelName, price, transmission, year } = singleCarDetails;

    const handleBooking = (car) => {
        history.push(`/booking/${car.modelName}`);
    }
    const handleGoHome = () => {
        history.push('/home');
    }

    return (
        <div className="m-5 col-lg-8 mx-auto bg-white">
            <Col className="shadow">
                <Card className="bg-dark">
                    <Card.Title className="fs-1 text-white text-center p-3">{manufacturer} {modelName} {year}</Card.Title>
                    <Card.Img className="img-fluid p-3" variant="top" src={carImg} />
                    <Card.Body>
                        <Accordion defaultActiveKey="0" flush className="fw-bold">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Description</Accordion.Header>
                                <Accordion.Body>{description}</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Engine Capacity</Accordion.Header>
                                <Accordion.Body>{engineCapacity} cc</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Price</Accordion.Header>
                                <Accordion.Body>{price} bdt</Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Transmission Type</Accordion.Header>
                                <Accordion.Body>{transmission}</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card.Body>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Button onClick={() => handleBooking(singleCarDetails)} variant="warning">Book Test Drive</Button>
                        <Button onClick={handleGoHome} variant="danger">Go Home</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ShowCarDetails;