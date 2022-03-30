import { Box, dividerClasses, Container } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from './components/app-bar';
import { CardSingle } from './components/card';
import { Cards } from './components/cards-container/card-holder';
import { getData } from './store/actions/actions';
import { IWeatherData } from './store/types';
import { ErrorPage } from './pages/error';
import { CityInfo } from './components/city-info';
import LoadingSpin from 'react-loading-spin';

function App() {
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(
    (state: any) => state.weather.isLoading
  );
  const isError: string = useSelector((state: any) => state.weather.isError);
  const city: string = useSelector((state: any) => state.weather.city);

  console.log('isLoading >>>', isLoading);
  console.log('isError >>>', isError);

  useEffect(() => {
    dispatch(getData('dushanbe'));
  }, []);

  useEffect(() => {
    if (city) {
      dispatch(getData(city));
    }
  }, [city]);

  return (
    <div className='App' style={{background:'rgb(245 245 245)'}} >
      <div>
        <NavBar />
      </div>
      <Container maxWidth='lg' >
        {isLoading && !isError && (
          <div style={{ width: '100%', textAlign: 'center', marginTop: '10%' }}>
            <LoadingSpin />
          </div>
        )}
        {!isLoading && isError && <ErrorPage />}
        {!isLoading && !isError && (
          <div>
            <div>
              <CityInfo />
            </div>
            <div>
              <Cards />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
