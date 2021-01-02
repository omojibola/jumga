import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html{
    --color-main:${(props) => props.theme.colors.main};
    --color-subMain:${(props) => props.theme.colors.subMain};
   
   
    --color-white:${(props) => props.theme.colors.white};
    --color-black:${(props) => props.theme.colors.black};
}

`;
