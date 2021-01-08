import React from "react";
import {HeaderTop, NavTop, Paragraph1, Wrapper, BrandName, Barrier, NavBottom, Group,
    SearchContainer, SearchInput, SearchWrapper, HeadSpan, LinkTag, NavLink, Ship, Call, Cart} from "./HeaderElements";
import ButtonName from "../Button/ButtonName";
import {KeyboardArrowDown, Search} from "@material-ui/icons";
import {useHistory} from "react-router-dom";

import { useSelector } from 'react-redux';
import {firebase} from "../../firebase/fire";

const Header = () => {
    const items = useSelector((state) => state.cart.basket);
    const auth = useSelector((state) => state.auth);
    const history = useHistory();

    const logOut = async () => {
        await firebase.auth().signOut();
        history.push('/');
        window.location.reload();
    };


    return (
        <div>
            <HeaderTop>
                <NavTop>
                    <Wrapper>
                        <Call fontSize='small'/>
                        <Paragraph1> + 234 811 123 5678</Paragraph1>
                        <Barrier/>
                        <Ship fontSize='small'/>
                        <Paragraph1> Shipping & Returns</Paragraph1>
                    </Wrapper>
                    <LinkTag to={'/'}>
                        <BrandName>JUMGA</BrandName>
                    </LinkTag>
                    <Wrapper>
                        {auth.email ? <Wrapper>
                                <Paragraph1>Welcome, {auth.email}</Paragraph1>
                            <ButtonName onClick={() => logOut()}>Sign Out</ButtonName>
                        </Wrapper> :
                            <LinkTag to={'/shop-login'}>
                                <ButtonName>Login</ButtonName>
                            </LinkTag>}
                        <Barrier/>
                        <NavLink to={'/shop-register'}>
                            <ButtonName>Sell on Jumga</ButtonName>
                        </NavLink>
                    </Wrapper>
                </NavTop>
                <NavBottom>
                    <Wrapper>
                        <Group>Categories</Group>
                        <KeyboardArrowDown/>
                    </Wrapper>
                    <Wrapper>
                        <Group>Brands</Group>
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
                            <Cart/>
                            <HeadSpan>{items.length}</HeadSpan>
                        </Wrapper>
                    </LinkTag>
                </NavBottom>
            </HeaderTop>
        </div>
    );
};

export default Header;
