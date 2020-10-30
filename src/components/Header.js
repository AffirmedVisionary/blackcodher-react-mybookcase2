import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand id="navTitle" href="/">The Bookcase</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mr-auto">
                <Nav.Item>
                    <Link to="/" className="nav-link">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/about" className="nav-link">About</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/search" className="nav-link">Search</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/shelf" className="nav-link">Shelf</Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
            <Nav>
            <Nav.Item>
                <Link to="/shelf" className="nav-link">
                    <div id="shelfCounterHeader"></div>
                </Link>
            </Nav.Item>
            </Nav>
        </Navbar>

    )
}

export default Header
/* <React.Fragment>
<div className="header">
            <h1>My Bookcase</h1>
            <Link to='/' className="bookLink">Home</Link>
            <Link to="/pages/About" className="bookLink">About</Link>
            <Link to='/pages/Search' className="bookLink">Search</Link>
            <Link to="/bookcase" className="bookLink">Bookcase</Link>
            <br></br>
            </div>
        </React.Fragment>
 */