import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export const HallOfShame = () => {
    return (
        <>
            <Row>
                <Col><h2 class="hallOfShame"> Hall Of Shame</h2></Col>
            </Row>
            <Row>
                <Col><h3 class="hallOfShame"> Actors</h3></Col>
            </Row>
            <Row>
                <Col>
                    <img
                        className="d-block w-100"
                        src={require("../images/robertZdar.jpg")}
                        alt="Second slide"
                    />
                    <a href="#">Robert Z'Dar</a></Col>
                <Col><img
                    className="d-block w-100"
                    src={require("../images/joeEstevez.jpg")}
                    alt="Second slide"
                /><a href="#">Joe Estevez</a></Col>
                <Col><img
                    className="d-block w-100"
                    src={require("../images/paulyShore.jpg")}
                    alt="Second slide"
                /><a href="#">Pauly Shore</a></Col>
                <Col>
                    <img
                        className="d-block w-100"
                        src={require("../images/Tommy-Wiseau-1.jpeg")}
                        alt="Second slide"
                    /><a href="#">Tommy Wiseau</a></Col>
                <Col> <img
                    className="d-block w-100"
                    src={require("../images/kimCoppola.jpg")}
                    alt="Second slide"
                /><a href="#">Nicolas Cage</a></Col>

            </Row>
            <Row>
                <Col><h3 class="hallOfShame"> Directors</h3></Col>
            </Row>
            <Row>
                <Col><img
                    className="d-block w-100"
                    src={require("../images/james.jpg")}
                    alt="Second slide"
                /><a href="#">James Nguyen</a></Col>
                <Col><img
                    className="d-block w-100"
                    src={require("../images/Tommy-Wiseau-1.jpeg")}
                    alt="Second slide"
                /><a href="#">Tommy Wiseau</a></Col>
                <Col><img
                    className="d-block w-100"
                    src={require("../images/edWood.jpg")}
                    alt="Second slide"
                /><a href="#">Ed Wood</a></Col>
                <Col><img
                    className="d-block w-100"
                    src={require("../images/joelSchumacher.jpg")}
                    alt="Second slide"
                /><a href="#">Joel Schumacher</a></Col>
                <Col><img
                    className="d-block w-100"
                    src={require("../images/schamylan.jpg")}
                    alt="Second slide"
                /><a href="#">M. Night Shyamalan</a></Col>
            </Row>
        </>
    )
}