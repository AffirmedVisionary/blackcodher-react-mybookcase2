import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import '../App.css'
// import Header from '../components/Header'

function Home() {
    return (
        <React.Fragment>
        <Container className="hero">
         <div as={Row} className="hero-text">
            <h1>The Bookcase</h1>
            <Button className="btnSpace" variant="warning" href="/about">About</Button>
            <Button className="btnSpace" variant="warning" href="/search">Search</Button>
            <Button className="btnSpace" variant="warning" href="/bookcase">Bookcase</Button>
         </div>
        </Container>
        </React.Fragment>
    )
}

export default Home