import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import friends from '../assets/us.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Container>
        <header className='mt-3 hero'>
          <h1 className='text-center'>Login or Sign up to Zine Me Up!</h1>
          <Image src={friends} thumbnail />
        </header>
        <main className='home-main' role='main'>
          <Button>
            <Link to={'/registration'}>
            Go to Register!
            </Link>
          </Button>
        </main>
      </Container>
    </>
  )
}

export default Home;