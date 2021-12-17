import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export const RecentMovies = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <a href="#">

                    <img
                        className="d-block w-100"
                        src={require("../images/goneFishing.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Gone Fishing</h3>
                        <p>Two fishing fanatics get in trouble when their car is stolen during a fishing trip.</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#">
                    <img
                        className="d-block w-100"
                        src={require("../images/notMyKid.jpg")}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Not My Kid</h3>
                        <p>A young drug-addicted teenager's family are in denial about it. She's sent to an intervention program where the addicts are confronted--by one another and by their families--in supervised ...</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href="#">
                    <img
                        className="d-block w-100"
                        src={require("../images/raidersOfTheSun.jpg")}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Raiders Of The Sun</h3>
                        <p>In a post-apocalyptic future, a commando named Brodie must defend the only village that still has gunpowder from a ruthless gang of raiders led by Clay, a traitor who plans to use the deadly powder to conquer the democratic Alpha League.</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>
        </Carousel>
    )
}