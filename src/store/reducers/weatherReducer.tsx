import {
  ERROR_SWITCHER,
  LOADER_SWITCHER,
  GET_DATA,
  IWeatherState,
  WeatherAction,
  SEARCH_CITY,
} from '../types';

const initialState: IWeatherState = {
  isError: '',
  isLoading: false,
  data: null,
  city: '',
};

function reducer(state = initialState, action: WeatherAction): IWeatherState {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
        isError: '',
        isLoading: false,
        city: '',
      };
    case LOADER_SWITCHER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ERROR_SWITCHER:
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
    case SEARCH_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
}

export { reducer };
