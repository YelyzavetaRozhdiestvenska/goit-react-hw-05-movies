const { useParams } = require('react-router-dom');

export const TrendingList = () => {
  const { items } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>movie Gallery: {items}</div>;
};
