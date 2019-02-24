import { Action, Dispatch } from 'redux';
import { ReduxState } from "../redux-state";
import axios from 'axios';
import * as acts from '../../infrastructure/button-services';

export const setHotelDataAction = (hotelData) => {
    return (dispatch: Dispatch<ReduxState>, getState: () => ReduxState) => {
        dispatch(setHotelData(hotelData));
    }
}

export const setHotelData = (hotelData) => {
    return {
        type: acts.SET_HOTEL_DATA,
        hotelData: hotelData
    }
}
