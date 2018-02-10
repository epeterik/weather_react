//App Imports
import { ADD_NEW_CITY,
         DISPLAY_CITY_DATA } from '../actions/types';

//reducer
export const reducer = (state, action) => {

    console.log("Entering Reducer");

    switch (action.type) {
    case ADD_NEW_CITY: 
        console.log("reducer - ADD_NEW_CITY");
        return state; 
    case DISPLAY_CITY_DATA: 
        console.log("reducer - DISPLAY_CITY_DATA");
        return state; 
    default: //if no case is caught, return the current unmodified state
        console.log("reducer - default");
        return state; 

    } //end switch

} //end of reducer

//only exporting one element as the default element
export default reducer;