import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleCar = ({ car }) => {
    const history = useHistory()
    const { modelName, manufacturer, carImg, year, description } = car.data;
    const handleSingleCarDetail = (id) => {
        history.push(`/showCar/${id}`)
    }
    return (
        <div>
            <Col>
                <Card className="shadow">
                    <Card.Img className="img-fluid" variant="top" src={carImg} />
                    <Card.Body>
                        <Card.Title>{manufacturer} {modelName} {year}</Card.Title>
                        <Card.Text>{description.slice(0, 105)}...</Card.Text>
                        <Button onClick={() => handleSingleCarDetail(car._id)} variant="warning">See Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCar;