import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Form, Tab, Tabs } from 'react-bootstrap';
import { auth } from '../components/firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';

const Registration = () => {

    const theAlert = withReactContent(Swal);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess ] = useState(false);

    const SignUp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                setSuccess(true);
            })
            .catch(err => {
                setSuccess(false);
                theAlert.fire({
                    title: 'Crap',
                    text: 'Wrong Password or Email...',
                    icon: 'error'
                });
            });
    };

    const LogIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {                
                setSuccess(true);
            })
            .catch(err => {
                setSuccess(false);
                theAlert.fire({
                    title: 'Crap',
                    text: 'Wrong Password or Email...',
                    icon: 'error'
                });
            });
    };


    return (
        <>
            <Container>
                <h3 className="text-center m-4">Login and or Register an account with Zine!</h3>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Register">
                        <Form onSubmit={SignUp}>
                            <Form.Group className='m-3' controlId='formEmailRegister'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className='m-3' controlId='formPasswordRegister'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant='success' className='mx-3' type='submit'>Zine It!</Button>
                            {success ? <Button variant='success' className='mx-3'><Link to={'/admin'}>Enter Admin Page!</Link></Button> : ''}
                        </Form>
                    </Tab>
                    <Tab eventKey="profile" title="Log in">
                    <Form onSubmit={LogIn}>
                            <Form.Group className='m-3' controlId='formEmailLogin'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                            <Form.Group className='m-3' controlId='formPasswordLogin'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant='success' className='mx-3' type='submit'>Zine It!</Button>
                            {success ? <Button variant='success' className='mx-3'> <Link to={'/admin'}>Enter Admin Page!</Link></Button> : ''}
                        </Form>
                    </Tab>                    
                </Tabs>
            </Container>
        </>
    )
}

export default Registration;