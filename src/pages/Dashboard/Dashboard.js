import React from 'react';
import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import AddCar from '../AddCar/AddCar';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import PostReview from '../PostReview/PostReview';

const Dashboard = () => {
    return (
        <div className="p-5">
            <h1 className="bg-success text-white rounded p-3 text-center">Dashboard</h1>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#myOrders">
                <Row>
                    <Col sm={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href="#myOrders">
                                My Orders
                            </ListGroup.Item>
                            <ListGroup.Item action href="#writeReview">
                                Write a Review
                            </ListGroup.Item>
                            <ListGroup.Item action href="#makeAdmin">
                                Make Admin
                            </ListGroup.Item>
                            <ListGroup.Item action href="#addCar">
                                Add a Car
                            </ListGroup.Item>
                            <ListGroup.Item action href="#manageOrders">
                                Manage Orders
                            </ListGroup.Item>
                            <ListGroup.Item action href="#logout">
                                Logout
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#makeAdmin">
                                <MakeAdmin />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#addCar">
                                <AddCar />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#writeReview">
                                <PostReview />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div >
    );
};

export default Dashboard;