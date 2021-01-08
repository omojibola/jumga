import styled from 'styled-components';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';

export const AppBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;
`;
export const AppBarText = styled.p`
  font-size: ${({ bold }) => (bold ? `18px` : `12px`)};
  font-weight: ${({ bold }) => (bold ? `400` : `300`)};
  font-family: poppins;
  margin-bottom: 0;
  color: ${({ main }) => (main ? `var(--color-main)` : `var(--color-blue)`)};
`;
export const LogoWrapper = styled.div`
  text-align: center;
  color: var(--color-main);
`;

export const StatusWrapper = styled.div`
  text-align: center;
  border-radius: 4px;
  padding: 3px;
  width: 85px;
  color: var(--color-white);
  background: var(--color-main);

  margin: 0 14px;
`;

export const StatusText = styled.div`
  font-size: 12px;
`;

export const SidebarText = styled(Link)`
  font-size: 14px;
  font-weight: medium;
  font-family: poppins;
  margin-bottom: 0;
  color: rgba(0, 0, 0, 0.7);

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

export const SidebarTextWrapper = styled.div`
  border: 2px solid red;
  display: flex;
`;

export const StyledList = styled(List)`
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 0.2s ease-in;
  border: 1px solid #eee;

  &:hover {
    background: var(--color-subMain);
    color: #fff !important;
  }
`;
