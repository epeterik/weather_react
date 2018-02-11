//package imports
import axios from 'axios';

//app imports
import { ADD_NEW_CITY,
         DISPLAY_CITY_DATA, 
         CITY_DATA_LOADING } from './types';

export function addNewCity(cityName, cityImageUrl) {
    return {
        type: ADD_NEW_CITY,
        payload: {cityName: cityName, 
                  imageUrl: cityImageUrl}
    }
}

export function displayCityData(cityWeatherData) {
    return {
        type: DISPLAY_CITY_DATA,
        payload: cityWeatherData
    }
}

export function cityDataLoading(isCityDataBeingRetrieved) {
    return {
        type: CITY_DATA_LOADING,
        payload: isCityDataBeingRetrieved
    }
}

export function getCityWeatherData (localCityName) {
    //debug
    console.log("Entering getCityWeatherData - City: ", localCityName);

    //if there is a state value listed, remove it before sending it to the API, 
    //  otherwise we get a 404
    if (localCityName.indexOf(",") > 0)
    {
        localCityName = localCityName.slice(0, localCityName.indexOf(","));
        console.log("City Name sans state: " + localCityName); //debug
    }

    //const
    const APIKey = "4ece3d4c4e003d64e571746c8fc0a4e9";
    let weatherQueryString = "http://api.openweathermap.org/data/2.5/weather?q=" + localCityName + "&APPID=" + APIKey
    //console.log(weatherQueryString); //debug

    return (dispatch) => {
        //set wait spinner
        dispatch(cityDataLoading(true));

        //make axios call to OpenWeatherAPI to get city weather data back
        axios.get(weatherQueryString)
            .then((response) => {
                console.log("Weather data returned in THEN response: ", response);

                //update state with city data to display
                dispatch(displayCityData(response.data));

                //set state var to turn off wait spinner
                dispatch(cityDataLoading(false));

            })
            .catch((error) => {
                console.log("Error encountered: ", error);

                //update state indicating error
                //doesn't matter what the payload is, will be tested in city weather for contents
                dispatch(displayCityData("error"));

                //set state var to turn off wait spinner
                dispatch(cityDataLoading(false));
            })

    } //end return

} //end getCityWeatherData