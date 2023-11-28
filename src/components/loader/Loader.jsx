import { ThreeCircles } from 'react-loader-spinner';
import { Spinner } from './loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <ThreeCircles height="100" width="100" color="#4fa94d" />
    </Spinner>
  );
};
