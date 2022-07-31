import React from 'react'
import { Jumbotron, AnimateShape } from '../Components'

function JumbotronContainer({ resultRef }) {
    
    const scrollToHandler = (e) => {
        e.preventDefault();
        if (!resultRef.current) return;
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <Jumbotron>
            {/* <AnimateShape positionJustify="left">
                <AnimateShape.Image src="/images/animated/shape_black.png" width="1366px" />
            </AnimateShape> */}
            <Jumbotron.Outer>
                <Jumbotron.Inner>
                    <Jumbotron.Title>WEEKEND FROM HOME</Jumbotron.Title>
                    <Jumbotron.SubTitle>Stay active with a little workout.</Jumbotron.SubTitle>
                </Jumbotron.Inner>
            </Jumbotron.Outer>
            {/* <AnimateShape.Big /> */}
            <AnimateShape positionJustify="left" mobile="true" id="Jumbo_blue_big" >
                <AnimateShape.Shape src="/images/animated/shape_blue_big.png" width="559px" position_y="0px" position_x="10rem" position_x_mobile="100%" margin_left_mobile="-42rem"/>
            </AnimateShape>
            <AnimateShape positionJustify="left" mobile="true" id="Jumbo_blue_oval">
                <AnimateShape.Shape src="/images/animated/shape_blue_oval.png" width="132px" position_y="206px" position_x="20rem" position_x_mobile="100%" position_y_mobile="206px" margin_left_mobile="-32rem" />
            </AnimateShape>
            <AnimateShape positionJustify="right" mobile="false" id="Jumbo_peach">
                <AnimateShape.Shape src="/images/animated/shape_peach.png" width="266px" position_y="303px" position_x="-160px" />
            </AnimateShape>
            <AnimateShape positionJustify="center" positionAlign="center" mobile="true" id="Jumbo_astronaut">
                <AnimateShape.Image src="/images/animated/astronaut.png" width="184px" rotate="0" />
            </AnimateShape>
            <AnimateShape positionJustify="center" positionAlign="center" mobile="true" >
                <AnimateShape.Button onClick={scrollToHandler} position_y="80px">Let's Go</AnimateShape.Button>
            </AnimateShape>
            {/* <ImgAstronaut>
                <ImgAstronaut.Image src="/images/astronaut.png" width="138px" rotate="180" />
            </ImgAstronaut> */}
        </Jumbotron>
    )
}

export default JumbotronContainer