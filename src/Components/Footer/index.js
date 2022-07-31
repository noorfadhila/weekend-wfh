import { Container, Credit, Version } from './styles/Footer';

export default function Footer({ children, ...props }) {
    return <Container {...props}>{children}</Container>
}

Footer.Credit = function FooterCredit({ children, ...props }) {
    return <Credit {...props}>{children}</Credit>
    
}

Footer.Version = function FooterVersion({ children, ...props }) {
    return <Version {...props}>{children}</Version>
}