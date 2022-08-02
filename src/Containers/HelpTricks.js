import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HelpTricks, Highlight, AnimateShape } from '../Components';
import { Row, Col } from "react-bootstrap";

function HelpTricksContainer() {

    const [ tricks, setTricks ] = useState(null);

    useEffect(() => {
        let isApiSubscribed = true;
        axios.get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
        .then(function (response) {
            // handle success
            if (isApiSubscribed) {
                setTricks(response.data)
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });

        return () => {
            // cancel the subscription
            isApiSubscribed = false;
        };
    }, []);

    let tricksContent = <p style={{color: '#fff;', textAlign: 'center'}}>loading</p>;

    if(tricks){
        tricksContent = tricks.map((item) => (
            <Col lg={4} key={item.id}>
                <HelpTricks.Box imgUrl={item.image}>
                    <HelpTricks.Overlay>
                        <Row className='mx-0'>
                            <Col xs={9}>
                                <HelpTricks.Text>{item.title}</HelpTricks.Text>
                            </Col>
                            <Col xs={3} className="d-flex align-items-center justify-content-center">
                                <HelpTricks.Button href={"https://www.weekendinc.com/"+item.slug}><span></span></HelpTricks.Button>
                            </Col>
                        </Row>
                    </HelpTricks.Overlay>
                </HelpTricks.Box>
            </Col>
        ))
    }

    return (
        <>
            <HelpTricks>
                <Highlight.Title className="mt-5">
                    Help &amp; Tips
                </Highlight.Title>
                <Row>
                    {tricksContent}
                </Row>
            </HelpTricks>
            <Highlight className="my-5">
                <Highlight.Title>You’re all set.</Highlight.Title>
                <Highlight.Description>
                The wise man therefore always holds in these matters to this principle of selection.
                </Highlight.Description>
            </Highlight>
            <Row>
                <Col>
                    <AnimateShape positionJustify="left" positionAlign="end" mobile="true" id="Deff_astronaut" z_index="10">
                        <AnimateShape.Image src="/images/animated/astronaut.png" width="95px" rotate="180" position_x="15px" />
                    </AnimateShape>
                    <AnimateShape position="unset" positionJustify="left" positionAlign="end" mobile="true" id="Deff_peach">
                        <AnimateShape.Shape src="/images/animated/shape_peach_bottom.png" width="158px" position_x="0px" position_y="0px"  />
                    </AnimateShape>
                </Col>
            </Row>
        </>
    );
}

export default HelpTricksContainer