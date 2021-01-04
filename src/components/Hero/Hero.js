import React from "react";
import {Hero1, HeroCover, HeroHeading, HeroText,
    HeroParagraph, HeroImg, HeroImage, HeadingSpan,
    Features, FeatureBox, FeatureHead, FeatureItem, FeatureP,
    Ship, Help, Pay, Collection, CollectionItem, CollectionP, CollectionItem2, CollectionItem3, CollectionText} from "./HeroElements";
import {Wrapper} from "../Header/HeaderElements";
import ButtonName from "../Button/ButtonName";
import model from '../../img/model-removebg-preview 1.png';


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

            <Features>
                <FeatureItem>
                    <Ship/>
                    <FeatureBox>
                        <FeatureHead>Seamless Delivery</FeatureHead>
                        <FeatureP>Smooth and fast delivery to your doorstep at cheap rates</FeatureP>
                    </FeatureBox>
                </FeatureItem>
                <FeatureItem>
                    <Pay/>
                    <FeatureBox>
                        <FeatureHead>Secure Payment</FeatureHead>
                        <FeatureP>100% secure payment, get easy support anytime</FeatureP>
                    </FeatureBox>
                </FeatureItem>
                <FeatureItem>
                    <Help/>
                    <FeatureBox>
                        <FeatureHead>24/7 Online Support</FeatureHead>
                        <FeatureP>Dedicated support anytime and anywhere</FeatureP>
                    </FeatureBox>
                </FeatureItem>
            </Features>

            <Collection>
                <CollectionItem>
                    <CollectionText>
                        <CollectionP>Men Collection</CollectionP>
                        <ButtonName>Shop Now</ButtonName>
                    </CollectionText>

                </CollectionItem>
                <CollectionItem2>
                    <CollectionText>
                        <CollectionP>Women Collection</CollectionP>
                        <ButtonName>Shop Now</ButtonName>
                    </CollectionText>
                </CollectionItem2>
                <CollectionItem3>
                    <CollectionText>
                        <CollectionP>Kids Collection</CollectionP>
                        <ButtonName>Shop Now</ButtonName>
                    </CollectionText>
                </CollectionItem3>
            </Collection>

        </>
    )
};

export default Hero;
