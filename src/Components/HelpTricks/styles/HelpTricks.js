import styled from "styled-components/macro";

export const Container = styled.div`
    padding: 8px 200px;

    @media (max-width: 600px){
        padding: 8px 32px;
    }
`;

export const Box = styled.div`
    background-image: url("${({ imgUrl }) =>
    imgUrl }");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    
    position: relative;
    width: 100%;
    padding-bottom: 70%;
    margin-top: 10px;
`;

export const Overlay = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    mix-blend-mode: normal;
    height: 72px;
    right: 0;
    left: 0;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.p`
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    margin-top: 10px;
    margin-left: 10px;
`;

export const Button = styled.a`
    text-decoration: none;
    background-color: #ffffff;
    border-radius: 20px;
    margin-bottom: 0px;
    width: 32px;
    height: 32px;
    & > span {
        background-image: url(/images/icon/right-arrow.png);
        background-repeat: no-repeat;
        background-position: center center;
        display: inline-block;
        width: 30px;
        height: 30px;
    }

    &:hover {
        transform: translateY(5px) translateZ(5px)
    }
`;

export const Images = styled.img`
    width: 311px;
    height: 176px;
`;