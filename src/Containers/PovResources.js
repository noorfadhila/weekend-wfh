import React from 'react'
import { Highlight } from '../Components'

function PovResourcesContainer() {
    return (
        <>
            <Highlight>
                <Highlight.Title>POV</Highlight.Title>
                <Highlight.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Highlight.Description>
            </Highlight>

            <Highlight className="mt-5">
                <Highlight.Title>Resources</Highlight.Title>
                <Highlight.Description>
                These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
                </Highlight.Description>
            </Highlight>
        </>
    )
}

export default PovResourcesContainer