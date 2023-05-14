import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import friends from '../assets/us.jpg';

const Home = () => {
  return (
    <>
      <Container>
        <header className='mt-3 hero'>
          <h1 className='text-center'>Login or Sign up to Zine Me Up!</h1>
          <Image src={friends} thumbnail />
        </header>
        <main className='home-main' role='main'>
          <Button href='/registration'>Go to Register!</Button>
        </main>
      </Container>
    </>
  )
}

export default Home;