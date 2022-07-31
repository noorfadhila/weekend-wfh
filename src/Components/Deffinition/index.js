import { Container, Inner, Description, Name } from './styles/Deffinition';

export default function Deffinition({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Deffinition.Inner = function DeffinitionInner({ children, ...props }) {
    return <Inner {...props}>{children}</Inner>
}

Deffinition.Desc = function DeffinitionDesc({ children, ...props }){
    return <Description {...props}>{children}</Description>
}

Deffinition.Name = function DeffinitionDesc({ children, ...props }){
    return <Name {...props}>{children}</Name>
}