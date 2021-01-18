import styled from 'styled-components';
import { LocalShipping, LiveHelp, Payment } from '@material-ui/icons';
import man from '../../img/man.jpg';
import woman from '../../img/woman.jpg';
import child from '../../img/child.jpg';

export const Ship = styled(LocalShipping)`
  color: var(--color-main);
`;

export const Help = styled(LiveHelp)`
  color: var(--color-main);
`;

export const Pay = styled(Payment)`
  color: var(--color-main);
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 10px;
  width: 35%;
  
  @media (max-width: 780px) {
  width: 90%;
  margin: 10px;
  }
`;

export const HeroHeading = styled.h1`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: var(--color-main);
  
  @media (max-width: 400px) {
  font-size: 24px;
  line-height: 32px;
  }
`;

export const HeroParagraph = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-black);
  width: 80%;
  padding-bottom: 60px;
  opacity: 0.6;
  
   @media (max-width: 400px) {
  font-size: 14px;
  line-height: 16px;
  padding-bottom: 20px;
  }
`;

export const HeadingSpan = styled.span`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 54px;
  color: var(--color-black);
  
   @media (max-width: 400px) {
  font-size: 24px;
  line-height: 32px;
  }
`;

export const HeroCover = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  
  @media (max-width: 780px) {
  flex-direction: column;
  }
`;

export const Hero1 = styled.div`
  background: var(--color-subMain);
`;

export const HeroImage = styled.div`
  width: 45%;
  display: flex;
  
  @media (max-width: 780px) {
  width: 90%;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  align-content: flex-end;
`;

export const Features = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
  
  @media (max-width: 780px) {
   width: 90%;  
  }
`;

export const FeatureBox = styled.div`
  margin-left: 20px;
`;

export const FeatureHead = styled.h6`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const FeatureP = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export const Collection = styled.div`
  width: 80%;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 780px) {
    flex-direction: column;
    margin: 30px auto;
  }
`;

export const CollectionItem = styled.div`
  background-image: url(${man});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 420px;
  width: 30%;
  padding: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  
  @media (max-width: 780px) {
   width: 90%;
   margin: 20px 0;
  cursor: pointer;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const CollectionItem2 = styled.div`
  background-image: url(${woman});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 420px;
  width: 30%;
  padding: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  
   @media (max-width: 780px) {
   width: 90%;
   margin: 20px 0;
  cursor: pointer;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const CollectionItem3 = styled.div`
  background-image: url(${child});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 420px;
  width: 30%;
  padding: 20px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  
   &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 780px) {
   width: 90%;
   margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  }
`;

export const CollectionText = styled.div`
  padding: 0;
`;

export const CollectionP = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  color: var(--color-white);
`;
