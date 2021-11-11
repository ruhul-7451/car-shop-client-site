import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory()
    const handleGoBack = () => {
        history.push('/home')
    }
    return (
        <div className="bg-primary text-center p-5">
            <img className="img-fluid w-50" src="https://i.ibb.co/xj7vg2X/Error-img.png" alt="ERROR! 404, PAGE NOT FOUND" />
            <Button onClick={handleGoBack} className='d-block m-5 mx-auto' variant="warning">Go Back</Button>
        </div>
    );
};

export default NotFound;