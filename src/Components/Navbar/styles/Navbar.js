import styled from "styled-components/macro";

export const Container = styled.nav`
    background-color: #ffffff;
    padding: 10px 210px;

    @media (max-width: 600px){
        padding: 10px 24px;
    }
`

export const UserInfo = styled.div`
    color: #000000;
    margin: 10px;
    width: 250px;
`

export const UserPhoto = styled.img`
    width: 33px;
`

export const UserGreet = styled.p`
    font-size: 12px;
    line-height: 14px;
`

export const UserName = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
`