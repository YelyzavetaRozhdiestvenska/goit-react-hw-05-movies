import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from '../../api';
import { Loader } from '../../components/loader/Loader';
import { TrendingList } from '../../components/trendingList/TrendingList';

const HomePage = () => {
  const location = useLocation();
  const [trendList, setTrendList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const trendList = await fetchTrending();

        if (trendList) setTrendList(trendList);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      {loading && <Loader />}
      <TrendingList items={trendList} state={{ from: location }} />
    </div>
  );
};

export default HomePage;
