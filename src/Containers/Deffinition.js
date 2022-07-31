import React, { forwardRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Deffinition, AnimateShape } from '../Components';

const DeffinitionContainer = forwardRef((props, ref) => {
    
    return (
        <div ref={ref}>
            <Deffinition >
                <AnimateShape positionJustify="right" mobile="true" id="Deff_peach">
                    <AnimateShape.Shape src="/images/animated/shape_peach.png" width="158px" position_x="6%" position_y="0px" position_x_mobile="22%" rotate="240" />
                </AnimateShape>
                <AnimateShape positionAlign="center" positionJustify="end" mobile="true" id="Deff_astronaut">
                    <AnimateShape.Image src="/images/animated/astronaut.png" width="95px" rotate="270" position_x="-32px" />
                </AnimateShape>
                <AnimateShape height="100vh" positionAlign="end" positionJustify="end" mobile="true" id="Deff_blue_oval">
                    <AnimateShape.Shape src="/images/animated/shape_blue_oval.png" width="89px" rotate="270" position_y="-10rem" position_x="-80%" position_x_mobile="-60%" position_y_mobile="-25rem" />
                </AnimateShape>
                <Container fluid>
                    <Row>
                        <Col>
                            <Deffinition.Inner>
                                <Deffinition.Desc>
                                <span>Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
                                </Deffinition.Desc>
                                <Deffinition.Name>
                                -weekend team
                                </Deffinition.Name>
                            </Deffinition.Inner>
                        </Col>
                    </Row>
                </Container>
                
                
            </Deffinition>
        </div>
    )
})

export default DeffinitionContainer;