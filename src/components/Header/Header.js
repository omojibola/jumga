import React from "react";
import {useSelector} from 'react-redux';
import {HeaderTop, NavTop, Paragraph1, Wrapper, BrandName, Barrier, NavBottom, Group,
    SearchContainer, SearchInput, SearchWrapper, HeadSpan, LinkTag} from "./HeaderElements";
import ButtonName from "../Button/ButtonName";
import {KeyboardArrowDown, Search, ShoppingCartOutlined, Phone, LocalShipping} from "@material-ui/icons";


const Header = () => {
    const items = useSelector(state => state.cart.basket);

    return (
        <div>
            <HeaderTop>
                <NavTop>
                    <Wrapper>
                        <Phone fontSize='small'/>
                        <Paragraph1> + 234 811 123 5678</Paragraph1>
                        <Barrier/>
                        <LocalShipping fontSize='small'/>
                        <Paragraph1> Shipping & Returns</Paragraph1>
                    </Wrapper>
                    <LinkTag to={'/'}>
                        <BrandName>JUMGA</BrandName>
                    </LinkTag>

                    <Wrapper>
                        <ButtonName>Login</ButtonName>
                        <Barrier/>
                        <ButtonName>Sell on Jumga</ButtonName>
                    </Wrapper>
                </NavTop>
                <NavBottom>
                    <Wrapper>
                        <Group>Categories</Group>
                        <KeyboardArrowDown/>
                    </Wrapper>
                    <Wrapper>
                        <Group dark>Brands</Group>
                        <KeyboardArrowDown/>
                    </Wrapper>
                    <SearchWrapper>
                        <SearchContainer>
                            <Search color='disabled'/>
                            <SearchInput placeholder={'Search Products'}/>
                        </SearchContainer>
                        <ButtonName>Search</ButtonName>
                    </SearchWrapper>
                    <LinkTag to={'/checkout'}>
                        <Wrapper>
                            <Paragraph1 dark weight>Cart</Paragraph1>
                            <ShoppingCartOutlined/>
                            <HeadSpan>{items.length}</HeadSpan>
                        </Wrapper>
                    </LinkTag>

                </NavBottom>
            </HeaderTop>
        </div>
    )
};

export default Header;