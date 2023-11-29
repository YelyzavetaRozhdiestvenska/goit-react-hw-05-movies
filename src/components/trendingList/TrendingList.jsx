import { useLocation, Link } from 'react-router-dom';

export const TrendingList = ({ items }) => {
  const location = useLocation();
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
