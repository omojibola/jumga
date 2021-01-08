import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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
import { useSelector } from 'react-redux';

import { fetchProfile } from '../../store/actions/profileActions';
import { fetchProduct } from '../../store/actions/productActions';

const Header = ({ startFetchProduct, startFetchProfile }) => {
  const items = useSelector((state) => state.cart.basket);

  const fetchProductDetails = async () => {
    await startFetchProduct();
  };

  const fetchProfileDetails = async () => {
    await startFetchProfile();
  };

  useEffect(() => {
    fetchProductDetails();
    fetchProfileDetails();
    // eslint-disable-next-line
  }, []);

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

const mapDispatchToProps = {
  startFetchProfile: fetchProfile,
  startFetchProduct: fetchProduct,
};

export default connect(null, mapDispatchToProps)(Header);
