import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Container = styled.div`
    position: ${({ position }) =>
    position ? position : 'absolute' };
    width: 100%;
    height: ${({ height }) =>
    height ? height : 'inherit' };;
    display: flex;
    justify-content: ${({ positionJustify }) =>
        positionJustify ? positionJustify : 'center' };
    align-items: ${({ positionAlign }) =>
        positionAlign ? positionAlign : 'baseline' };
    overflow: hidden;
    z-index: ${({ z_index }) =>
    z_index ? z_index : '0' };;

    @media (max-width: 600px){
        display: ${({ mobile }) =>
            mobile==="true" ? 'flex' : 'none' };
    }
`;

export const Image = styled(motion.img)`
    display: block;
    width: ${({ width }) =>
        width ? width : '95px' };

    transform: rotate(${({ rotate }) =>
        rotate ? `${rotate}deg` : '0deg' }) !important;
    position: relative;
    top: ${({ position_y }) =>
        position_y ? position_y : '0px' };
        
    left: ${({ position_x }) =>
        position_x ? position_x : '0px' };
`;

export const Shape = styled(motion.img)`
    display: block;
    width: ${({ width }) =>
        width ? width : '95px' };

    transform: rotate(${({ rotate }) =>
        rotate ? `${rotate}deg` : '0deg' }) !important;
    position: relative;
    top: ${({ position_y }) =>
        position_y ? position_y : '0px' };
        
    left: ${({ position_x }) =>
        position_x ? position_x : '0px' };
    margin-left: 0px;
    @media (max-width: 600px){

        // getting cropped center (mobile)
        top: ${({ position_y_mobile }) =>
        position_y_mobile ? position_y_mobile : '0px' };;
        left: ${({ position_x_mobile }) =>
        position_x_mobile ? position_x_mobile : '0px' };;
        margin-left: ${({ margin_left_mobile }) =>
        margin_left_mobile ? margin_left_mobile : '0rem' };
    }
`;

export const Button = styled(motion.button)`
    display: block;
    font-size: 16px;
    line-height: 19px;
    width: 231px;
    height: 58px;
    position: relative;
    top: ${({ position_y }) =>
    position_y ? position_y : '0px' };
    border: none;
    border-radius: 29px;
    // box-shadow: 0px 20px 30px rgba(249, 131, 171, 0.5);

`;