import * as React from 'react';
import * as fs from 'file-saver';
import ActionPanel from '../components/action-panel';
import { Dispatch } from "redux";
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ReduxState } from "./../../presentation";
import { executeOrdersAction } from '../../presentation/actions/execute-orders';

const mapDispatchToProps = (dispatch: Dispatch<ReduxState>) => {
    return {
        submitHotelData: (city, checkin, checkout) => {
            dispatch(executeOrdersAction(city, checkin, checkout));
        }
    };
};

// Bind fileData to this.props.fileData
const mapStateToProps = (state: ReduxState) => {
    return { 
        hotelData: state.hotelData
    }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionPanel);


