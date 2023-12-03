import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const Title1 = styled.h1`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Title2 = styled.h2`
  margin-bottom: 20px;
  margin-top: 20px;
`;

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
