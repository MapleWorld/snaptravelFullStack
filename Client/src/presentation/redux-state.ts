import { Reducer } from "redux";
import reducer from "./reducers";
import HotelProfile from "../../../Server/src/Common/src/business/hotel-profile"

export interface ReduxState {
    hotelData: HotelProfile,
}

export const DEFAULT_STATE: ReduxState = (<Reducer<ReduxState | undefined>>reducer)(undefined, {
    type: '',
    hotelData: {},
})!; 