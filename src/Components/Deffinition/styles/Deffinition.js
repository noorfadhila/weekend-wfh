import styled from "styled-components/macro";

export const Container = styled.div`
    background-color: #EEBECE;
`;

export const Inner = styled.div`
    margin: 22% 27%;
    
    @media (max-width: 600px){
        margin: 200px 32px;
    }
`;

export const Description = styled.p`
    color: #000000;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 32px;
    text-align: right;
    letter-spacing: -0.75px;
    & > span {
        color: blue;
        font-weight: 700;
    }

    @media (max-width: 600px){
        font-size: 16px;
        line-height: 24px;
    }
`;

export const Name = styled.p`
    font-size: 21px;
    font-style: italic;
    font-weight: 700;
    line-height: 25px;
    text-align: right;
    color: #FFFFFF;
    @media (max-width: 600px){
        font-size: 16px;
        line-height: 19px;
    }
`;