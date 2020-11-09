import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import '../App.css'
// import Header from '../components/Header'

function Home() {
    return (
        <React.Fragment>
        <Container className="hero">
         <div as={Row} className="hero-text">
            <h1>The Bookcase</h1>
            <Button className="btnSpace" variant="warning"><Link to="/about" className="btnLink">About</Link></Button>
            <Button className="btnSpace" variant="warning"><Link to="/search" className="btnLink">Search</Link></Button>
            <Button className="btnSpace" variant="warning"><Link to="/shelf" className="btnLink">Shelf</Link></Button>
         </div>
        </Container>
        </React.Fragment>
    )
}

export default Home