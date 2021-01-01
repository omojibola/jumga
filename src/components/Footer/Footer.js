import React from "react";
import {FooterCover, FooterLinkBox, FooterName, FooterP, FooterSocial} from "./FooterElements";
import {Twitter, Facebook, Instagram} from "@material-ui/icons";

const Footer = () => {
    return (
        <div>
            <FooterCover>
                <FooterLinkBox>
                    <FooterName>JUMGA</FooterName>
                    <FooterP>Join Us on Social Media</FooterP>
                    <FooterSocial>
                        <Twitter/>
                        <Facebook/>
                        <Instagram/>
                    </FooterSocial>
                </FooterLinkBox>
                <FooterLinkBox>
                    <FooterName>Menu</FooterName>
                    <FooterP>Categories</FooterP>
                    <FooterP>Sales</FooterP>
                    <FooterP>Brands</FooterP>
                </FooterLinkBox>
            </FooterCover>
        </div>
    )
};

export default Footer;