import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 15px;
  max-width: 900px;
  margin: 0 auto;
`;
