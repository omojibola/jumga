import styled from 'styled-components';
import {Twitter, Facebook, Instagram} from "@material-ui/icons";

export const Icon = styled(Facebook)`
color: var(--color-white);
`;

export const Tweet = styled(Twitter)`
color: var(--color-white);
`;

export const Insta = styled(Instagram)`
color: var(--color-white);
`;

export const FooterCover = styled.footer`
  background-color: var(--color-main);
  width: 100%;
  display: flex;
  padding: 5% 10%;
  justify-content: space-between;
`;

export const FooterLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

`;

export const FooterName = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin: 5% 0;
`;

export const FooterP = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: #ffffff;
  margin: 5% 0;
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  width: 80%;
`;
