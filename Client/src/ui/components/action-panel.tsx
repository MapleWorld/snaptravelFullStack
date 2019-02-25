import * as React from 'react';
import { Dispatch } from "redux";
import { ReduxState } from "./../../presentation";
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fs from 'file-saver';
import axios from 'axios';

interface Props {
    submitHotelData: (city, checkin, checkout) => void;
}

interface ComponentState {
    city: string,
    checkin: string,
    checkout: string,
}
export default class ActionPanel extends Component < Props, ComponentState > {
    constructor(props: any) {
        super(props);
        this.state = {
            city: null,
            checkin: null,
            checkout: null
        }
    }

    onChange(e) {
        this.setState({
            ...this.state, 
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submitHotelData(this.state.city, this.state.checkin, this.state.checkout);
    }

    render() {
        return (
            <div> 
                <p>
                    <div>Setting the default value for city as "cityA" which will sends the request to the server, 
                        and the server will check the hotels aginst the hotels in the cache, perform filter on the hotels
                        and return back the hotels within the wanted city location
                    </div>
                </p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>City:<input type="text" name="city" onChange={this.onChange.bind(this)}/></label>
                    <label>Checkin:<input type="text" name="checkin" onChange={this.onChange.bind(this)}/></label>
                    <label>Checkout:<input type="text" name="checkout" onChange={this.onChange.bind(this)}/></label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}















