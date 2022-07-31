import { Container, Outer, Inner, Title, SubTitle } from "./styles/Jumbotron";

export default function Jumbotron({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Jumbotron.Outer = function JumbotronOuter({ children, ...props }) {
    return <Outer {...props}>{children}</Outer>
}

Jumbotron.Inner = function JumbotronInner({ children, ...props }) {
    return <Inner {...props}>{children}</Inner>
}

Jumbotron.Title = function JumbotronTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...props }) {
    return <SubTitle {...props}>{children}</SubTitle>
}