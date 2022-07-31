
import { Container, Box, Text, Button, Overlay } from "./styles/HelpTricks";

export default function HelpTricks({ children, ...props }) {
    return <Container {...props} >{children}</Container>
}

HelpTricks.Box = function HelpTricksBox({ children, ...props }) {
    return <Box {...props} >{children}</Box>
}

HelpTricks.Overlay = function HelpTricksOverlay({ children, ...props }) {
    return <Overlay {...props} >{children}</Overlay>
}

HelpTricks.Text = function HelpTricksText({ children, ...props }) {
    return <Text {...props} >{children}</Text>
}

HelpTricks.Button = function HelpTricksButton({ children, ...props }) {
    return <Button {...props} >{children}</Button>
}