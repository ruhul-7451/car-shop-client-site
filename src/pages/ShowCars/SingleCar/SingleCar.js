import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleCar = ({ car }) => {
    const history = useHistory()
    const { modelName, manufacturer, carImg, year } = car.data;
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
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button onClick={() => handleSingleCarDetail(car._id)} variant="warning">See Details</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCar;