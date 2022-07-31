import { Container, Title, Description } from './styles/Highlight';

export default function Highlight({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Highlight.Title = function HighlightTitle({ children, ...props }) {
    return <Title {...props}>{children}</Title>    
}

Highlight.Description = function HighlightDescription({ children, ...props }) {
    return <Description {...props}>{children}</Description>    
}