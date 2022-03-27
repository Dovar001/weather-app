import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import {Provider} from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
palette:{
  primary:{
    main:'#ff7452',
    contrastText:'white'

  }
}
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <Provider store={store} >
    <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

