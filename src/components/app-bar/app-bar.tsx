import { FC } from 'react';
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

import { Search } from '@mui/icons-material';
import styles from './app-bar.module.css'


const NavBar: FC = () => {
    const theme = useTheme()
  return (
    <AppBar position='fixed'  >
      <Toolbar sx={{ justifyContent: "space-between"}} >
        <Box component='div'>
          <Typography>Dovar001</Typography>
        </Box>
        <Box component='div'>
          <TextField
          variant='standard'
          size='medium'
          className={styles.input}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <IconButton>
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
