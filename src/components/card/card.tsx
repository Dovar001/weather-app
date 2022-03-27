import { FC } from 'react';
import styles from './card.module.css';

const CardSingle: FC<any> = (props) => {
  const time = (props?.dt_txt).slice(10, 16);
  const temp = Math.round(props?.main?.temp - 273);
  console.log('props  ', props);
  return (
    <div className={styles.card}>
      <div className={styles.time}>{time}</div>
      <div className={styles.gradus}>{`${temp}°`}</div>
      <div className={styles.img}>
        <img
          src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`}
          alt=''
        />
      </div>
      <div className={styles.desc}>{props?.weather[0]?.main}</div>
    </div>
  );
};

export { CardSingle };
