import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerHeader">

                <h3>DMdb</h3>
                <br />
                <p>Bringing you the best of the worst, and other cult movies!</p>
                <p>From <a href="https://cult-of-momus.herokuapp.com/">Cult Of Momus</a></p>
            </div>
            <div className="footerContent">
                <Row>
                    <Col><a href="#">Help</a></Col>
                    <Col><a href="#">About Us</a></Col>
                    <Col><a href="#">Suggest A Movie!</a></Col>
                    <Col><a href="#">Movies</a></Col>
                    <Col><a href="#">Join Us!</a></Col>
                </Row>
                <Row>
                    <Col><a href="#">Hall Of Shame</a></Col>
                    <Col><a href="#">Make A Donation</a></Col>
                    <Col><a href="#">Contact Us</a></Col>
                    <Col><a href="#">Privacy Policy</a></Col>
                    <Col><a href="#">Photo Album</a></Col>
                </Row>
            </div>
        </div>
    )

}