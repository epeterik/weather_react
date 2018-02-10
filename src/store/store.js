//package imports
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

//app based imports
import reducer from '../reducers/reducer';

const initialState = {
    cityList: [{cityName: 'Seatle, Wa', imageUrl: ''},
               {cityName: 'San Jose, Ca', imageUrl: ''}, 
               {cityName: 'Burbank, Ca', imageUrl: ''},
               {cityName: 'Dallas, Tx', imageUrl: ''},
               {cityName: 'Washington, DC', imageUrl: ''},
               {cityName: 'Chicago, Il', imageUrl: ''}, 
               {cityName: 'Tulsa, OK', imageUrl: ''}],
    currentCityData: {}
}

export default createStore(
    reducer,  //local reducer from reducer
    initialState, //set initial state
    applyMiddleware(logger, thunk)
); //apply both the thunk and the redux logger middleware