import styled from 'styled-components';

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 10px;
`;

export const HeroHeading = styled.h1`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: var(--color-main);
`;

export const HeroParagraph = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: var(--color-black);
  width: 80%;
  padding-bottom: 60px;
  opacity: 0.6;
`;

export const HeadingSpan = styled.span`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 54px;
  //color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  color: var(--color-black);
`;

export const HeroCover = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 500px;
  margin: 0 auto 80px;
`;

export const Hero1 = styled.div`
  background: var(--color-subMain);
  height: 500px;
`;

export const HeroImage = styled.div`
  width: 35%;
`;

export const HeroImg = styled.img`
  width: 100%;
`;
