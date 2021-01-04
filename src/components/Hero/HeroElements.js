import styled from 'styled-components';
import theme from "../../utils/theme";
import {LocalShipping, LiveHelp, Payment} from "@material-ui/icons";
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
  width: 35%;
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
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
<<<<<<< HEAD
  //color: rgba(0, 0, 0, 0.54);
  color:  ${({colorType}) => (colorType ? theme.colors.main : 'rgba(0, 0, 0, 0.54)')};;
=======

  color: var(--color-black);
>>>>>>> fbc7b38f9cbb1c499171c4d44391258727da52f1
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
  margin: 0 auto;
`;

export const Hero1 = styled.div`
  background: var(--color-subMain);
`;

export const HeroImage = styled.div`
  width: 35%;
  display: flex;
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

`;

export const FeatureItem = styled.div`
display: flex;
width: 25%;
align-items: center;
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
`;

export const CollectionItem = styled.div`
background-image: url(${man});
min-height: 420px;
min-width: 320px;
padding: 20px;
display: flex;
align-items: center;
`;

export const CollectionItem2 = styled.div`
background-image: url(${woman});
min-height: 420px;
min-width: 320px;
padding: 20px;
display: flex;
align-items: center;
`;

export const CollectionItem3 = styled.div`
background-image: url(${child});
min-height: 420px;
min-width: 320px;
padding: 20px;
display: flex;
align-items: center;
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