import styled from "styled-components";

export const Container = styled.footer`
    background-color: #0B24FB;
    padding: 24px;
    text-align: center;
`;

export const Credit = styled.p`
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 0px;
    
    & > span{
        font-weight: 700
    }

    @media (max-width: 600px){
        font-size: 12px;
        line-height: 14px;
    }
`;

export const Version = styled.p`
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 0px;
    

    & > span{
        border: 1px solid #ffffff;
        border-radius: 15px;
        padding: 3px 10px 5px 10px;
    }

    @media (max-width: 600px){
        font-size: 10px;
        line-height: 12px;
    }
`;