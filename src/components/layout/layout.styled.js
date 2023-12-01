import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #494d4e;

  &.active {
    color: #0c7d45;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: block;
`;

export const ListPage = styled.ul`
  display: flex;
`;

export const ItemPage = styled.li`
  display: inline-block;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;

  font-weight: 400;
`;
