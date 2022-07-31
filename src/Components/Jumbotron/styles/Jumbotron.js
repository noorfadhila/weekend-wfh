import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #EEBECE;
    max-width: 100%;
    overflow: unset;
    height: 100vh;
`;

export const Inner = styled.div`
    position: relative;
    z-index: 100;
`;

export const Outer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(/images/animated/shape_black.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 100px;
    text-align: center;
    
    @media (max-width: 600px){
        padding: 67px 37px;
    }
`;

export const Title = styled.h1`
    font-size: 62px;
    font-weight: 800;
    line-height: 51px;

    @media (max-width: 600px){
        font-size: 52px;
    }
`;

export const SubTitle = styled.h4`
    font-size: 21px;
    font-style: italic;
    font-weight: 600;
    line-height: 25px;
    padding: 20px;

    @media (max-width: 600px){
        font-size: 16px;
        line-height: 19px;
    }
`;