import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IWeatherData } from '../../store/types';
import styles from './city-info.module.css'

const CityInfo: FC = () => {
  const data: IWeatherData = useSelector((state: any) => state.weather.data);

  return (
    <div className={styles.main} >
      Weather forecast for{' '}
      <span className={styles.city} >
        {data?.city?.name},{data?.city?.country}
      </span>
    </div>
  );
};

export { CityInfo };
