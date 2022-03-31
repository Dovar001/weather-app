export const LOADER_SWITCHER = 'LOADER_SWITCHER';
export const ERROR_SWITCHER = 'ERROR_SWITCHER';
export const GET_DATA = 'GET_DATA';
export const SEARCH_CITY = 'SEARCH_CITY';

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: IWeather[];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: number;
      };
      dt_txt: string;
    }
  ];
  city: {
    id: number;
    name: string;
    population: number;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface IWeatherError {
  message: string;
}

export interface ICity {
  type: typeof SEARCH_CITY;
  payload: string;
}

export interface IWeatherState {
  isLoading: boolean;
  isError: string;
  data: IWeatherData | null;
  city: string;
}

export interface IGetWeatherAction {
  type: typeof GET_DATA;
  payload: IWeatherData;
}

export interface ILoaderSwitcherAction {
  type: typeof LOADER_SWITCHER;
  payload: boolean;
}

export interface IErrorSwitcherAction {
  type: typeof ERROR_SWITCHER;
  payload: string;
}

export type WeatherAction =
  | IGetWeatherAction
  | IErrorSwitcherAction
  | ICity
  | ILoaderSwitcherAction;
