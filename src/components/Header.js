import React from 'react'
import "../App.css"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand id="navTitle" href="/">The Bookcase</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/bookcase">Shelf</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Nav>
            <Nav.Item><div id="shelfCounterHeader"></div></Nav.Item>
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