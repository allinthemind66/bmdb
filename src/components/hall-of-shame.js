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
                    <a href="#">
                        <img
                            className="d-block w-100"
                            src={require("../images/robertZdar.jpg")}
                            alt="Second slide"
                        />
                        Robert Z'Dar</a></Col>
                <Col><a href="#"><img
                    className="d-block w-100"
                    src={require("../images/joeEstevez.jpg")}
                    alt="Second slide"
                />Joe Estevez</a></Col>
                <Col><a href="#"><img
                    className="d-block w-100"
                    src={require("../images/paulyShore.jpg")}
                    alt="Second slide"
                />Pauly Shore</a></Col>
                <Col><a href="#">
                    <img
                        className="d-block w-100"
                        src={require("../images/Tommy-Wiseau-1.jpeg")}
                        alt="Second slide"
                    />Tommy Wiseau</a></Col>
                <Col> <a href="#"><img
                    className="d-block w-100"
                    src={require("../images/kimCoppola.jpg")}
                    alt="Second slide"
                />Nicolas Cage</a></Col>

            </Row>
            <Row>
                <Col><h3 class="hallOfShame"> Directors</h3></Col>
            </Row>
            <Row>
                <Col><a href="#"><img
                    className="d-block w-100"
                    src={require("../images/james.jpg")}
                    alt="Second slide"
                />James Nguyen</a></Col>
                <Col><a href="#"><img
                    className="d-block w-100"
                    src={require("../images/Tommy-Wiseau-1.jpeg")}
                    alt="Second slide"
                />Tommy Wiseau</a></Col>
                <Col><a href="#"><img
                    className="d-block w-100"
                    src={require("../images/edWood.jpg")}
                    alt="Second slide"
                />Ed Wood</a></Col>
                <Col><a href="#"><img
                    className="d-block w-100"
                    src={require("../images/joelSchumacher.jpg")}
                    alt="Second slide"
                />Joel Schumacher</a></Col>
                <Col><a href="#"><img
                    className="d-block w-100"
                    src={require("../images/schamylan.jpg")}
                    alt="Second slide"
                />M. Night Shyamalan</a></Col>
            </Row>
        </>
    )
}