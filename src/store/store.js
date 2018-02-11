//package imports
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';

//app based imports
import reducer from '../reducers/reducer';

const initialState = {
    cityList: [{cityName: 'Seattle', imageUrl: 'https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg?h=350&auto=compress&cs=tinysrgb'},
               {cityName: 'San Jose', imageUrl: 'https://images.pexels.com/photos/7653/pexels-photo.jpeg?h=350&auto=compress&cs=tinysrgb'}, 
               {cityName: 'Burbank', imageUrl: 'https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?h=350&auto=compress&cs=tinysrgb'},
               {cityName: 'Dallas', imageUrl: 'https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?h=350&auto=compress&cs=tinysrgb'},
               {cityName: 'Washington', imageUrl: 'https://images.pexels.com/photos/208702/pexels-photo-208702.jpeg?h=350&auto=compress&cs=tinysrgb'},
               {cityName: 'Chicago', imageUrl: 'https://images.pexels.com/photos/167200/pexels-photo-167200.jpeg?h=350&auto=compress&cs=tinysrgb'}, 
               {cityName: 'Tulsa', imageUrl: 'https://images.pexels.com/photos/349506/pexels-photo-349506.jpeg?h=350&auto=compress&cs=tinysrgb'}],
    currentCityData: undefined,
    cityDataLoading: false
}

export default createStore(
    reducer,  //local reducer from reducer
    initialState, //set initial state
    applyMiddleware(logger, thunk)
); //apply both the thunk and the redux logger middleware