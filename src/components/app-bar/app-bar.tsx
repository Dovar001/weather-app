import { FC, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';

import { Search } from '@mui/icons-material';
import styles from './app-bar.module.css';
import { searchCity } from '../../store/actions/actions';

const NavBar: FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  console.log('city >>>', city);

  const onKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      dispatch(searchCity(city));
    }
  };

  return (
    <AppBar elevation={1} position='fixed' color='default'  >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box className={styles.container} component='div'>
          <img className={styles.logo} src='weather-logo.png' alt='' />
          <Typography>Weather</Typography>
        </Box>
        <Box component='div'>
          <TextField
            variant='outlined'
            size='small'
            className={styles.input}
            value={city}
            onKeyDown={onKeyDown}
            onChange={(e) => setCity(e.target.value)}
            placeholder='city or country '
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <IconButton onClick={() => dispatch(searchCity(city))}>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
