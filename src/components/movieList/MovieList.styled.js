import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  text-decoration: none;
`;

export const StyleItem = styled.li`
  color: #494d4e;
  padding: 10px;
`;

export const StyledLink = styled(Link)`
  color: #494d4e;

  &.active {
    color: #0c7d45;
  }
`;
