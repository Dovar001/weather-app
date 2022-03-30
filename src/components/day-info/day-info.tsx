import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IWeatherData } from '../../store/types';
import { CardSingle } from '../card';
import { months, weekDays } from '../../helpers';


import styles from './day-info.module.css';

interface DayInfoProps {
  day: Date;
}

const DayInfo: FC<DayInfoProps> = ({ day }) => {
  const data: IWeatherData = useSelector((state: any) => state.weather.data);
  console.log(data)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.dateInfo}>
          <div className={styles.date}>{day.getDate()}</div>
          <div className={styles.month}>{months[day.getMonth()]}</div>
          <div className={styles.week}>{weekDays[day.getDay()]}</div>
          
        </div>

        <div className={styles.cards}>
          {data &&
            data.list
              .filter(
                (weather) =>
                  new Date(weather.dt_txt).getDate() === day.getDate()
              )
              .map((weather, idx) => <CardSingle key={idx} {...weather} />)}
        </div>
      </div>
    </>
  );
};

export { DayInfo };
