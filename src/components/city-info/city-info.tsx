import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IWeatherData } from '../../store/types';
import { YMaps, Map } from 'react-yandex-maps';
import styles from './city-info.module.css';

const CityInfo: FC = () => {
  const data: IWeatherData = useSelector((state: any) => state.weather.data);
  console.log('coord >>>>', data?.city);

  return (
    <div className={styles.main}>
      <div className={styles.info}>
        Weather forecast for <br />
        <span className={styles.city}>
          {data?.city?.name},{data?.city?.country}
        </span>
        <div>Population:{data?.city.population}</div>
      </div>
      <div className={styles.map}>
        <YMaps>
          <Map
            className={styles.mapCon}
            defaultState={{
              center: [data?.city.coord.lat, data?.city.coord.lon],
              zoom: 9,
            }}
          />
        </YMaps>
      </div>
    </div>
  );
};

export { CityInfo };
