import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogIn from '../SocialLogIn/SocialLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user);


    const handleSubmit = async event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);   
        
    }
    const navigateRegister = event =>{
        navigate('/register')
    }
    const resetPassword = async()=>{
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('enter your email')
        }
    };
    
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from]);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error ) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    };

    return (
        <div className='container mx-auto w-50 mt-5'>
            <Helmet>
                <title>Login-Cars Repaire </title>
            </Helmet>
            <h2>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button className='d-block w-50 mx-auto my-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New Account? <Link to='/register' className='text-danger pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>
            <p>forget password? <button className='btn btn-link text-danger pe-auto text-decoration-none ' onClick={resetPassword}>reset password</button></p>
            {errorElement}
            <SocialLogIn></SocialLogIn>
            <ToastContainer />
        </div>
    );
};

export default Login;