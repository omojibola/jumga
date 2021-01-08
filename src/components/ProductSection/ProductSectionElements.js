import styled from "styled-components";
import {Button} from "@material-ui/core";

export const ProductCover = styled.div`
width: 80%;
margin: 40px auto;

`;

export const ProductText = styled.p`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
color: #000000;
`;

export const ProductCase = styled.div`
    display: flex;
    z-index: 1;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ProductWrap = styled.div`
display: flex;
justify-content: center;
`;

export const MoreButton = styled(Button)`
text-transform: inherit !important;
margin: 20px 0 !important;
color: var(--color-main) !important;
border-radius: 0 !important;
border-color: var(--color-main) !important;
font-size: 16px !important;
line-height: 24px !important;
padding: 10px 20px !important;
`;