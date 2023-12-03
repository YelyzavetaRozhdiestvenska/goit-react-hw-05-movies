import { List, StyleItem, StyledLink } from './MovieList.styled';

export const MovieList = ({ items, state }) => {
  return (
    <List>
      {items.map(item => (
        <StyleItem key={item.id}>
          <StyledLink to={`/movies/${item.id}`} state={state}>
            {item.title}
          </StyledLink>
        </StyleItem>
      ))}
    </List>
  );
};
