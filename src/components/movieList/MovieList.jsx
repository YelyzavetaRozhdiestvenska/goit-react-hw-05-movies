import { useLocation } from 'react-router-dom';
import { List, StyleItem, StyledLink } from './MovieList.styled';

export const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <List>
      {items.map(item => (
        <StyleItem key={item.id}>
          <StyledLink to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </StyledLink>
        </StyleItem>
      ))}
    </List>
  );
};
