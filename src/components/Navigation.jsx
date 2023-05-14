import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = ({ user }) => {
    
  return (
    <Navbar bg='dark' expand="lg" variant='dark'>
        <Container>
            <Navbar.Brand href='/'>
                Zine Me Up
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='zine-navbar' />
            <Navbar.Collapse id='zine-navbar'>
                <Nav className='me-auto'>                    
                    {user ? <Nav.Link href='/admin'>Admin Page</Nav.Link> : ''}
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar> 
  )
}

export default Navigation