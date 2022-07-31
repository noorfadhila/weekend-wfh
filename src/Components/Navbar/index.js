import React from 'react'
import { Container, UserInfo, UserPhoto, UserGreet, UserName } from './styles/Navbar';

export default function Navbar({ children, ...props }){
    return <Container {...props} >{children}</Container>
}

Navbar.UserInfo = function NavbarUserInfo({ children, ...props }) {
    return <UserInfo {...props} >{children}</UserInfo>
}

Navbar.UserPhoto = function NavbarUserPhoto({ ...props }) {
    return <UserPhoto {...props} />
}

Navbar.UserGreet = function NavbarUserGreet({ children, ...props }) {
    return <UserGreet {...props} >{children}</UserGreet>
}

Navbar.UserName = function NavbarUserName({ children, ...props }) {
    return <UserName {...props} >{children}</UserName>
}