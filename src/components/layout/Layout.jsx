import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/loader/Loader';
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
