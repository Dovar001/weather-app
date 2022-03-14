import {
  ERROR_SWITCHER,
  LOADER_SWITCHER,
  GET_DATA,
  IWeatherState,
  WeatherAction,
} from '../types';

const initialState: IWeatherState = {
  isError: '',
  isLoading: false,
  data:null,
};

function reducer(
  state = initialState,
  action: WeatherAction
): IWeatherState {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
        isError: '',
        isLoading: false,
      };
    case LOADER_SWITCHER:
      return {
        ...state,
        isLoading:action.payload,
      };
    case ERROR_SWITCHER:
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
      default: 
      return state
  }
}

export {reducer}