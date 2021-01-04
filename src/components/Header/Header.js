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
} from './HeaderElements';
import ButtonName from '../Button/ButtonName';
import {
  KeyboardArrowDown,
  Search,
  ShoppingCartOutlined,
  Phone,
  LocalShipping,
} from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const items = useSelector((state) => state.cart.basket);

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
          <LinkTag to={'/'}>
            <BrandName>JUMGA</BrandName>
          </LinkTag>

          <Wrapper>
            <ButtonName>
              <NavLink to={'/'}> Login</NavLink>
            </ButtonName>
            <Barrier />
            <ButtonName>
              <NavLink to={'/shop-login'}> Sell on Jumga</NavLink>
            </ButtonName>
          </Wrapper>
        </NavTop>
        <NavBottom>
          <Wrapper>
            <Group>Categories</Group>
            <KeyboardArrowDown />
          </Wrapper>
          <Wrapper>
            <Group dark>Brands</Group>
            <KeyboardArrowDown />
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
              <ShoppingCartOutlined />
              <HeadSpan>{items.length}</HeadSpan>
            </Wrapper>
          </LinkTag>
        </NavBottom>
      </HeaderTop>
    </div>
  );
};

export default Header;
