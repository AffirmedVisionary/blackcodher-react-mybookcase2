import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import '../App.css'

function About() {
    return (
        <React.Fragment>
            <Container className="hero">
        <div className="hero-text">
          <h1>Welcome to the Bookcase</h1>
          <h3>This application was made by Charlene Grant</h3>
          <p>The app displays a list of books to the user and allows them to save their favourites to a local bookcase</p>
            <p>Click on the Add button to save a book to your bookcase. You can also search by name, author and description</p>
            <Button href="/pages/Search">Look For A Book!</Button>
      </div>
      </Container>
        </React.Fragment>
    )
}

export default About