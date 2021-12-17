import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { SearchBar } from './search-bar'

export const NavigationBar = () => {
    return (<>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BMbd</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Menu</Nav.Link>
                </Nav>
                <SearchBar />
            </Container>
        </Navbar>
    </>)
}