import {combineReducers} from 'redux';
import SetHotelData from './set-hotel-data';

const rootReducer = combineReducers({
    hotelData: SetHotelData,   
});

export default rootReducer;
