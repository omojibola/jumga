import React from "react";
import {Hero1, HeroCover, HeroHeading, HeroText, HeroParagraph, HeroImg, HeroImage, HeadingSpan} from "./HeroElements";
import {Wrapper} from "../Header/HeaderElements";
import ButtonName from "../Button/ButtonName";
import model from '../../img/model 1.jpg';

const Hero = () => {
    return (
        <>
            <Hero1>
                <HeroCover>
                    <HeroText>
                        <HeroHeading>Holiday Sales, <HeadingSpan>Best Deals of the Season</HeadingSpan></HeroHeading>
                        <HeroParagraph>Get up to 60% off from now till January 31st on amazing cloth sales</HeroParagraph>
                        <Wrapper>
                            <ButtonName>Shop Now</ButtonName>
                        </Wrapper>
                    </HeroText>
                    <HeroImage>
                        <HeroImg src={model}/>
                    </HeroImage>
                </HeroCover>
            </Hero1>

        </>
    )
};

export default Hero;
