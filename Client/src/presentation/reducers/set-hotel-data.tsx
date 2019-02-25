import * as acts from '../../infrastructure/button-services';

export default function(state: any = [], action: any) {
    switch(action.type) {
        case acts.SET_HOTEL_DATA:
            console.log("Reducer set hotel data");
            return action.hotelData.data;
    } 
    return state;
} 