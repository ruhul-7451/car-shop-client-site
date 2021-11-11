import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFirebase from '../../../Hooks/useFirebase';
const googleLogo = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const { register, handleSubmit, reset } = useForm();

    const { googleSignIn, registerUser, signInUser } = useFirebase();

    const onSubmit = data => {
        console.log(data);
        if (isChecked) {
            signInUser(data.email, data.password);
        }
        else {
            if (data.password !== data.password2) {
                setErrorMsg('Passwords did not matched');
                return
            }
            reset();
            setErrorMsg('');
            registerUser(data.name, data.email, data.password);
        }

    };

    const toggleChange = (e) => {
        setIsChecked(e.target.checked);
        setErrorMsg('');
    };

    const handleGoogleSignIn = () => {
        googleSignIn();
    }

    return (
        <div>
            <Form className="container bg-light rounded shadow p-5 m-5 mx-auto col-lg-4 col-md-8 col-sm-10" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center mb-3 text-primary">Please {isChecked ? 'Login' : 'Register'}</h2>
                {isChecked || <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control placeholder="Full Name" {...register("name", { required: true })} />
                </Form.Group>}
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
                </Form.Group>
                {isChecked || <Form.Group className="mb-3">
                    <Form.Label>Re-Type Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-Type Password" {...register("password2", { required: true })} />
                </Form.Group>}
                <Form.Group className="mb-3">
                    <Form.Check onChange={toggleChange} type="checkbox" label="Already Have an Account?" />
                    <Form.Text className="text-danger">
                        {errorMsg}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="row w-75 mx-auto">
                    <Button className="my-3" variant="primary" type="submit">
                        {isChecked ? 'Login' : 'Register'}
                    </Button>
                    <Button onClick={handleGoogleSignIn} variant="success">{googleLogo} Google Sign In</Button></Form.Group>
            </Form>
        </div>
    );
};

export default Login;