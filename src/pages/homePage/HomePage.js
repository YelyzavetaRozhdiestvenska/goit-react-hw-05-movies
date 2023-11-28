import { useState, useEffect } from 'react';
import { fetchTrending } from '../../api';
import { Loader } from '../../components/loader/Loader';
import { TrendingList } from '../../components/trendingList/TrendingList';

const HomePage = () => {
  const [trendList, setTrendList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);
        const trendList = await fetchTrending();
        setTrendList(trendList);
      } catch (error) {
        setLoading(false);
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
      <TrendingList items={trendList} />
    </div>
  );
};

export default HomePage;
