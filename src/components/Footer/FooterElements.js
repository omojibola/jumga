import styled from 'styled-components';

export const FooterCover = styled.footer`
  background-color: var(--color-main);
  width: 100%;
  display: flex;
  padding: 5% 10%;
`;

export const FooterLinkBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
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
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 5% 0;
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-around;
`;
