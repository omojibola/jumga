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
  flex-wrap: wrap;
`;

export const FooterLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px 0;
  min-width: 100px;
`;

export const FooterName = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  margin: 5% 0;
  
  @media (max-width: 780px) {
  margin: 4% 0;
  }
`;

export const FooterP = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 5% 0;
  
   @media (max-width: 780px) {
  margin: 2% 0;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  width: 80%;
  
`;
