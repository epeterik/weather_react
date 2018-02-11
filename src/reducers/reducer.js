//App Imports
import { ADD_NEW_CITY,
         DISPLAY_CITY_DATA, 
         CITY_DATA_LOADING } from '../actions/types';

//reducer
export const reducer = (state, action) => {

    console.log("Entering Reducer");

    switch (action.type) {
    case ADD_NEW_CITY: 
        console.log("reducer - ADD_NEW_CITY");
        state = { ...state, 
                  cityList: state.cityList.concat(action.payload)}
        return state; 
    case DISPLAY_CITY_DATA: 
        console.log("reducer - DISPLAY_CITY_DATA");
        state = { ...state, 
                  currentCityData: action.payload};
        return state; 
    case CITY_DATA_LOADING: 
        console.log("reducer - CITY_DATA_LOADING");
        state = { ...state, 
                  cityDataLoading: action.payload };
        return state; 
    default: //if no case is caught, return the current unmodified state
        console.log("reducer - default");
        return state; 

    } //end switch

} //end of reducer

//only exporting one element as the default element
export default reducer;