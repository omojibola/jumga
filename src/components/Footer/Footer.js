import React from "react";
import {FooterCover, FooterLinkBox, FooterName, FooterP, FooterSocial, Icon, Tweet, Insta} from "./FooterElements";

const Footer = () => {
    return (
        <div>
            <FooterCover>
                <FooterLinkBox>
                    <FooterName>JUMGA</FooterName>
                    <FooterP>Join Us on Social Media</FooterP>
                    <FooterSocial>
                        <Icon/>
                        <Tweet/>
                        <Insta/>
                    </FooterSocial>
                </FooterLinkBox>
                <FooterLinkBox>
                    <FooterName>Menu</FooterName>
                    <FooterP>Categories</FooterP>
                    <FooterP>Sales</FooterP>
                    <FooterP>Brands</FooterP>
                </FooterLinkBox>
                <FooterLinkBox>
                    <FooterName>Information</FooterName>
                    <FooterP>Shipping Info</FooterP>
                    <FooterP>Privacy Policy</FooterP>
                    <FooterP>Contact Us</FooterP>
                </FooterLinkBox>
                <FooterLinkBox>
                    <FooterName>Make Money With Us</FooterName>
                    <FooterP>Become a Seller</FooterP>
                    <FooterP>Login</FooterP>
                    <FooterP>Become an Affiliate Partner</FooterP>
                </FooterLinkBox>
            </FooterCover>
        </div>
    )
};

export default Footer;