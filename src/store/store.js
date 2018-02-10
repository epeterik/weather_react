//package imports
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

//app based imports
import reducer from '../reducers/reducer';

const initialState = {
    cityList: [{cityName: 'Seatle, Wa', imageUrl: 'https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg?h=350&auto=compress&cs=tinysrgb'},
               {cityName: 'San Jose, Ca', imageUrl: 'https://images.pexels.com/photos/7653/pexels-photo.jpeg?h=350&auto=compress&cs=tinysrgb'}, 
               {cityName: 'Burbank, Ca', imageUrl: 'https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?h=350&auto=compress&cs=tinysrgb'},
               {cityName: 'Dallas, Tx', imageUrl: 'https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?h=350&auto=compress&cs=tinysrgb'},
               {cityName: 'Washington, DC', imageUrl: 'https://images.pexels.com/photos/208702/pexels-photo-208702.jpeg?h=350&auto=compress&cs=tinysrgb'},
               {cityName: 'Chicago, Il', imageUrl: 'https://images.pexels.com/photos/167200/pexels-photo-167200.jpeg?h=350&auto=compress&cs=tinysrgb'}, 
               {cityName: 'Tulsa, OK', imageUrl: 'https://www.twenty20.com/photos/ecbf59fb-1888-4ec7-b167-694de4bb80bd?cta=ft&cta_uid=f4fa0815-85e9-48e6-a02e-d08d3d1fbcf0&utm_t20_source=partner&utm_t20_channel=pexels&utm_t20_campaign=related'}],
    currentCityData: {}
}

export default createStore(
    reducer,  //local reducer from reducer
    initialState, //set initial state
    applyMiddleware(logger, thunk)
); //apply both the thunk and the redux logger middleware