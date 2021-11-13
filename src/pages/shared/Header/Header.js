import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, displayName, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home'>Car Bazar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/allCars'>All Cars</Nav.Link>
                            <Nav.Link as={Link} to='/reviews'>Reviews</Nav.Link>
                            <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
                            {user.email && <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>}
                        </Nav>
                        <Nav>
                            <Navbar.Text className="mx-3 text-info">
                                {displayName ? displayName : user.displayName}
                            </Navbar.Text>
                            {user.email ? <Nav.Link onClick={logOut} className="btn btn-warning text-dark" as={Link} to="/home">Logout</Nav.Link> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;