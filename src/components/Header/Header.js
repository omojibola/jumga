import React from 'react';
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
  LinkTag,
  NavLink,
  Ship,
  Cart,
  Call,
} from './HeaderElements';
import ButtonName from '../Button/ButtonName';
import { KeyboardArrowDown, Search } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const Header = () => {
  const items = useSelector((state) => state.cart.basket);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.firebase.profile);

  return (
    <div>
      <HeaderTop>
        <NavTop>
          <Wrapper>
            <Call fontSize="small" />
            <Paragraph1> + 234 811 123 5678</Paragraph1>
            <Barrier />
            <Ship fontSize="small" />
            <Paragraph1> Shipping & Returns</Paragraph1>
          </Wrapper>
          <LinkTag to={'/'}>
            <BrandName>JUMGA</BrandName>
          </LinkTag>
          <Wrapper>
            {auth.email ? (
              <Wrapper>
                <Paragraph1>Welcome, {profile.shopName}</Paragraph1>
              </Wrapper>
            ) : (
              <LinkTag to={'/shop-login'}>
                <ButtonName>Login</ButtonName>
              </LinkTag>
            )}
            <Barrier />
            {auth.email ? (
              <NavLink to={'/dashboard'}>
                <ButtonName>Go to dashboard</ButtonName>
              </NavLink>
            ) : (
              <NavLink to={'/shop-register'}>
                <ButtonName>Sell on Jumga</ButtonName>
              </NavLink>
            )}
          </Wrapper>
        </NavTop>
        <NavBottom>
          <Wrapper>
            <Wrapper>
              <Group>Categories</Group>
              <KeyboardArrowDown/>
            </Wrapper>
            <Wrapper>
              <Group>Brands</Group>
              <KeyboardArrowDown />
            </Wrapper>
          </Wrapper>
          <SearchWrapper>
            <SearchContainer>
              <Search color="disabled" />
              <SearchInput placeholder={'Search Products'} />
            </SearchContainer>
            <ButtonName>Search</ButtonName>
          </SearchWrapper>
          <LinkTag to={'/checkout'}>
            <Wrapper>
              <Paragraph1 dark weight>
                Cart
              </Paragraph1>
              <Cart />
              <HeadSpan>{items.length}</HeadSpan>
            </Wrapper>
          </LinkTag>
        </NavBottom>
      </HeaderTop>
    </div>
  );
};

export default Header;
