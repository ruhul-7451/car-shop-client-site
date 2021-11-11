import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const mapMarker = <FontAwesomeIcon icon={faMapMarkerAlt} />
const envelop = <FontAwesomeIcon icon={faEnvelope} />
const telephone = <FontAwesomeIcon icon={faPhoneAlt} />
const logo = <FontAwesomeIcon icon={faCar} />
const fb = <FontAwesomeIcon icon={faFacebookSquare} />
const youtube = <FontAwesomeIcon icon={faYoutubeSquare} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const insta = <FontAwesomeIcon icon={faInstagramSquare} />

const Footer = () => {
    return (
        <div>
            <div className="bg-dark text-white p-5">
                <Row xs={1} md={2} lg={4} className="mx-auto g-4">
                    <Col>
                        <h5 className="mb-3 fs-3">{logo} Car Bazar</h5>
                        <h6 className="lh-base">{mapMarker} Bangladesh, Dhaka 1206, Dhaka</h6>
                        <h6 className="lh-base">{envelop} Official: csehastakenmylife@gmail.com</h6>
                        <h6 className="lh-base">{telephone} Helpline: 01711223344 (Available: 09:00am to 7:00pm)</h6>
                    </Col>
                    <Col>
                        <h5>About Us</h5>
                        <h6 className="lh-base">Car Blogs</h6>
                        <h6 className="lh-base">Refund Policy</h6>
                        <h6 className="lh-base">Privacy Policy</h6>
                        <h6 className="lh-base">Terms and Conditions</h6>
                    </Col>
                    <Col className="text-center">
                        <h5>Subscribe Newsletter</h5>
                        <Form className=" mx-auto mt-3">
                            <Form.Control type="email" placeholder="Enter email" />
                            <Button className="w-100 my-1" variant="info">
                                Submit
                            </Button>
                        </Form>
                        <div className="d-flex align-items-center justify-content-center">
                            <p className="me-3 fs-3">{fb}</p>
                            <p className="mx-3 fs-3">{youtube}</p>
                            <p className="mx-3 fs-3">{linkedin}</p>
                            <p className="ms-3 fs-3">{insta}</p>
                        </div>
                    </Col>
                    <Col className="text-center">
                        <img className="img-fluid rounded" src="https://i.ibb.co/wC5Rrv2/Payment-Brands.jpg" alt="" />
                    </Col>
                </Row>
                <hr />
                <div className="text-center">
                    &copy; 2021 All Rights Reserved - Md. Ruhul Amin Khan
                </div>
            </div>
        </div>
    );
};

export default Footer;