import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { RecentMovies } from './recent-movies'

export const MoviesOfTheMonth = () => {
    return (
        <Row>
            <Col>
                <h3>Movies Of The Month</h3>
                <div class="fit-picture">
                    <RecentMovies />
                </div>
            </Col>
            <Col>
                <h3>Review Of The Week</h3>
                <h4><a href="#">A Gnome Named Norm (AKA Upworld)</a ></h4>
                <p>This film is one of those that makes very clear an adage, which is pretty important in any line of work, and especially in film IMO -- "Know what you know, and know what you don't know." Stan Winston very clearly knew Makeup Special Effects, and he was a master in that field. He clearly did not know film directing ( nor shot coverage nor overseeing editing nor,... well, several other knowledge gaps in his tool chest pop out when one views this movie).

                    The puppetry and facial animatronics in this movie are very good, but it falls flat in almost every other department (although I think there MAY have been a decent script initially).

                    Hitchcock didn't sing in films, he knew better. The Coens don't act in films, they know better. Daniel Day-Lewis does not write screenplays, he brings the characters off of the page as a master actor. Stan Winston knew Makeup SFX at a master level, but did not know film directing. - R</p><br />
                <p>This movie did not really engage either my heart or my head. I would say that it is more appropriate for children, except some of the humour is a little too adult for a young audience. Nevertheless, a wonderful performance from Mark Harelik as the odious Kaminsky kept me watching to the end. - M</p>
                <p><b>Enjoyability rating:</b> 3/10</p>
            </Col>
        </Row>
    )
}