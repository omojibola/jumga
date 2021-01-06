import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html{
    --color-main:${(props) => props.theme.colors.main};
    --color-subMain:${(props) => props.theme.colors.subMain};
   
   
    --color-white:${(props) => props.theme.colors.white};
    --color-black:${(props) => props.theme.colors.black};
    --color-blue:${(props) => props.theme.colors.blue};
    --color-subBlue:${(props) => props.theme.colors.subBlue};

    font-size:75%;
}

`;
