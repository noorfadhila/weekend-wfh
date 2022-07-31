import styled from "styled-components";

export const Container = styled.div`
    margin: 0px 374px;
    
    @media (max-width: 600px){
        margin: 67px 32px;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 900;
    line-height: 38px;
    text-align: center;
    padding: 30px;
    
    @media (max-width: 600px){
        text-align: left;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    @media (max-width: 600px){
        font-size: 16px;
        line-height: 24px;
        text-align: left;
    }
`;