import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  HeaderTop,
  NavTop,
  Paragraph1,
  Wrapper,
  BrandName,
  Barrier,
  NavBottom,
  Group,
  SearchContainer,
  SearchInput,
  SearchWrapper,
  HeadSpan,
  NavLink,
} from './HeaderElements';
import ButtonName from '../Button/ButtonName';
import {
  KeyboardArrowDown,
  Search,
  ShoppingCartOutlined,
  Phone,
  LocalShipping,
} from '@material-ui/icons';

const Header = () => {
  const items = useSelector((state) => state.cart.basket);
  const dispatch = useDispatch();

  return (
    <div>
      <HeaderTop>
        <NavTop>
          <Wrapper>
            <Phone fontSize="small" />
            <Paragraph1> + 234 811 123 5678</Paragraph1>
            <Barrier />
            <LocalShipping fontSize="small" />
            <Paragraph1> Shipping & Returns</Paragraph1>
          </Wrapper>

          <BrandName to="/">JUMGA</BrandName>

          <Wrapper>
            <ButtonName>Login</ButtonName>
            <Barrier />
            <ButtonName>
              <NavLink to="/shop-login">Sell on Jumga</NavLink>
            </ButtonName>
          </Wrapper>
        </NavTop>
        <NavBottom>
          <Wrapper>
            <Group>Categories</Group>
            <KeyboardArrowDown />
          </Wrapper>
          <Wrapper>
            <Group>Brands</Group>
            <KeyboardArrowDown />
          </Wrapper>
          <SearchWrapper>
            <SearchContainer>
              <Search color="disabled" />
              <SearchInput placeholder={'Search Products'} />
            </SearchContainer>
            <ButtonName>Search</ButtonName>
          </SearchWrapper>
          <Wrapper>
            <Paragraph1 weight color>
              Cart
            </Paragraph1>
            <ShoppingCartOutlined />
            <HeadSpan>{items.length}</HeadSpan>
          </Wrapper>
        </NavBottom>
      </HeaderTop>
    </div>
  );
};

export default Header;
