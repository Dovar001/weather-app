import { Box } from '@mui/material';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IWeatherData } from '../../store/types';
import { CardSingle } from '../card/card';
import Carousel from 'react-multi-carousel';
import styles from './card-holder.module.css';

const Cards: FC = () => {
  const dispatch = useDispatch();
  const data: IWeatherData = useSelector((state: any) => state.weather.data);

  console.log('data-list >>>', data?.list);


  return (
    <>
      <div className={styles.cards}>
        {data &&
          data.list.slice(0, 8).map((weather) => {
            return <CardSingle {...weather} />;
          })}
      </div>
      <div className={styles.cards}>
        {data &&
          data.list.slice(8,16).map((weather) => {
            return <CardSingle {...weather} />;
          })}
      </div>
      <div className={styles.cards}>
        {data &&
          data.list.slice(16, 24).map((weather) => {
            return <CardSingle {...weather} />;
          })}
      </div>
      <div className={styles.cards}>
        {data &&
          data.list.slice(24, 32).map((weather) => {
            return <CardSingle {...weather} />;
          })}
      </div>
      <div className={styles.cards}>
        {data &&
          data.list.slice(32).map((weather) => {
            return <CardSingle {...weather} />;
          })}
      </div>
    </>
  );
};

export { Cards };
