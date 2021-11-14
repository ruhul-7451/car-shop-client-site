import React from 'react';
import { Col, ListGroup, Row, Tab } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import AddCar from '../AddCar/AddCar';
import ReceivedMessages from '../Contacts/ReceivedMessages/ReceivedMessages';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageBookings from '../ManageBookings/ManageBookings';
import ManageCars from '../ManageCars/ManageCars';
import MyBookings from '../MyBookings/MyBookings';
import Payment from '../Payment/Payment';
import PostReview from '../PostReview/PostReview';

const Dashboard = () => {
    const { admin, logOut } = useAuth();
    const confirmLogout = () => {
        const says = window.confirm('You will be logged out')
        if (says) {
            return logOut();
        }
    }
    return (
        <div className="p-5">
            <h1 className="bg-success text-white rounded p-3 text-center">Dashboard</h1>
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#myBookings">
                <Row>
                    <Col sm={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href="#myBookings">
                                My Bookings
                            </ListGroup.Item>
                            <ListGroup.Item action href="#payment">
                                Make a Payment
                            </ListGroup.Item>
                            <ListGroup.Item action href="#writeReview">
                                Write a Review
                            </ListGroup.Item>
                            {admin && <ListGroup variant="flush">
                                <ListGroup.Item action href="#makeAdmin">
                                    Make Admin
                                </ListGroup.Item>
                                <ListGroup.Item action href="#addCar">
                                    Add a Car
                                </ListGroup.Item>
                                <ListGroup.Item action href="#manageCars">
                                    Manage Cars
                                </ListGroup.Item>
                                <ListGroup.Item action href="#manageOrders">
                                    Manage Bookings
                                </ListGroup.Item>
                                <ListGroup.Item action href="#receivedMessages">
                                    Received Messages
                                </ListGroup.Item>
                            </ListGroup>}
                            <ListGroup.Item className="text-danger" onClick={confirmLogout} action href="#logout">
                                Logout
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#myBookings">
                                <MyBookings />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#payment">
                                <Payment />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#writeReview">
                                <PostReview />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#makeAdmin">
                                <MakeAdmin />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#addCar">
                                <AddCar />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#manageCars">
                                <ManageCars></ManageCars>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#manageOrders">
                                <ManageBookings></ManageBookings>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#receivedMessages">
                                <ReceivedMessages></ReceivedMessages>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div >
    );
};

export default Dashboard;