import { Outlet } from 'react-router-dom';
import { StyledLink, Container } from './layout.styled';
export const Layout = () => {
  return (
    <Container>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
