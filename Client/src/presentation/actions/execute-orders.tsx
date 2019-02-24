import { Action, Dispatch } from 'redux';
import { ReduxState } from "../redux-state";
import { setHotelData } from './set-hotel-data';
import axios from 'axios';
import * as acts from '../../infrastructure/button-services';

export const executeOrdersAction = (city, checkin, checkout) => { 
    return (dispatch: Dispatch<ReduxState>, getState: () => ReduxState) => {
        const url = acts.SERVER_PATH + "/execute-orders";
        let snapTravelData = {
            city,
            checkin,
            checkout,
            provider : 'snaptravel'
        }
        let retailData = {
            city,
            checkin,
            checkout,
            provider : 'retail'
        }
        axios.post(url, snapTravelData).then(obj => {
            dispatch(setHotelData(obj));
        });
        axios.post(url, retailData).then(obj => {
            dispatch(setHotelData(obj));
        });
    }
}
