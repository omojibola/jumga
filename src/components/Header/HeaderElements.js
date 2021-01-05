import styled from "styled-components";
import {Link} from "react-router-dom";
import {LocalShipping, Phone, ShoppingCartOutlined} from "@material-ui/icons";

export const LinkTag = styled(Link)`
color: inherit;
text-decoration: none;

`;

export const Ship = styled(LocalShipping)`
color: var(--color-main);
`;

export const Call = styled(Phone)`
color: var(--color-main);
`;
export const Cart = styled(ShoppingCartOutlined)`
color: var(--color-main);
`;

export const HeaderTop = styled.header`
  width: 100%;
`;

export const NavTop = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const BrandName = styled(Link)`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: var(--color-main);
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export const Paragraph1 = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? '600' : 'normal')};
  font-size: 14px;
  line-height: 21px;
  color: ${({ color }) => color ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.54)'};
  margin: 0 5px;
`;

export const Barrier = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.54);
  height: 25px;
  transform: rotate(180deg);
  margin: 0 10px;
`;

export const NavBottom = styled.nav`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-top: 2px solid #e5e5e5;
  padding: 10px 10%;
  align-items: center;
`;

export const Group = styled.h5`
font-family: Poppins, sans-serif;
font-style: normal;
font-weight: 600;
line-height: 21px;
color: var(--color-main);
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex: 1;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(196, 196, 196, 0.08);
  border-radius: 5px;
  align-content: center;
  flex: 0.7;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  background: transparent;
  width: 90%;
`;

export const HeadSpan = styled.span`
position: absolute;
top: -12px;
right: -15px;
background: var(--color-main);
padding: 2px 6px;
border-radius: 50%;
font-size: 12px;
color: var(--color-white) ;
`;

export const NavLink = styled(Link)`
  color: var(--color-main);
  &:hover {
  text-decoration: none;
  color: var(--color-main);
  }
`;
