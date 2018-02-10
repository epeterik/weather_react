import { ADD_NEW_CITY,
         DISPLAY_CITY_DATA } from './types';

export function addNewCity(cityName) {
    return {
        type: ADD_NEW_CITY,
        payload: cityName
    }
}

export function displayCityData(cityWeatherData) {
    return {
        type: DISPLAY_CITY_DATA,
        payload: cityWeatherData
    }
}