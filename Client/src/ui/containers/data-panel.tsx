import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { ReduxState } from "./../../presentation";
import DataTable from '../components/data-table';

// Bind fileData to this.props.fileData
const mapStateToProps = (state: ReduxState) => {
    return { hotelData: state.hotelData }; 
}

export default connect(mapStateToProps)(DataTable);




