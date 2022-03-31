import { FC } from 'react';
import styles from './error-page.module.css';
import { useSelector } from 'react-redux';

const ErrorPage: FC = () => {
  const error: string = useSelector((state: any) => state.weather.isError);
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.ops}>Oops!</div>
        <div className={styles.error}>Error happaned</div>
        <div className={styles.errorText}>{error}</div>
      </div>
    </div>
  );
};

export { ErrorPage };
