import React, { useRef } from 'react';
import FooterContainer from '../Containers/Footer';
import JumbotronContainer from '../Containers/Jumbotron';
import DeffinitionContainer from '../Containers/Deffinition';
import TestimonialContainer from '../Containers/Testimonial';
import PovResourcesContainer from '../Containers/PovResources';
import HelpTricksContainer from '../Containers/HelpTricks';

function Home() {
    const resultRef = useRef(null);
    return (
        <>
            <JumbotronContainer resultRef={resultRef} />
            <DeffinitionContainer ref={resultRef} />
            <TestimonialContainer />
            <PovResourcesContainer />
            <HelpTricksContainer />
            <FooterContainer />
        </>
    )
}

export default Home