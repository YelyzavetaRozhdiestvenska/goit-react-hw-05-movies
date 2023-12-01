import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Header, ListPage, ItemPage } from './layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <ListPage>
          <ItemPage>
            <StyledLink to="/">Home</StyledLink>
          </ItemPage>
          <ItemPage>
            <StyledLink to="/movies">Movies</StyledLink>
          </ItemPage>
        </ListPage>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
