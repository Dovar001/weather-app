import {
  ERROR_SWITCHER,
  LOADER_SWITCHER,
  GET_DATA,
  ILoaderSwitcherAction,
  IErrorSwitcherAction,
  IWeatherData,
  IWeatherError,
} from '../types';

export function loaderSwitcher(loaderState: boolean): ILoaderSwitcherAction {
  return {
    type: LOADER_SWITCHER,
    payload: loaderState,
  };
}
export function errorSwitcher(errorState: string): IErrorSwitcherAction {
  return {
    type: ERROR_SWITCHER,
    payload: errorState,
  };
}
export const getData = (city: string) => {
  return async (dispatch: any) => {
    dispatch(loaderSwitcher(true));
    const url = new URL(
      'https://community-open-weather-map.p.rapidapi.com/forecast'
    );

    url.searchParams.set('q', city);
    try {
      const res = await fetch(url.href, {
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key':
            '923777365emshee1435367f16eebp10b70bjsnc6ef88acec9a',
        },
      });

      if (!res.ok) {
        const resData: IWeatherError = await res.json();
        throw new Error(resData.message);
      }
      const resData: IWeatherData = await res.json();
      dispatch({
        type: GET_DATA,
        payload: resData,
      });
      dispatch(loaderSwitcher(false));
    } catch (error: any) {
      dispatch(loaderSwitcher(false));
      dispatch(errorSwitcher(error.message));
    }
  };
};
