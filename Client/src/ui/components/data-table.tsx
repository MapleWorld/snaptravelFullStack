import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import HotelProfile from "./../../../../Server/src/Common/src/business/hotel-profile"

interface Props {
    hotelData: [HotelProfile];
}

export default class dataTable extends Component < Props > {
    constructor(props: any) {
        super(props);
    }

    renderHotelData(hotelData: any) {
        return (
            <tr key={hotelData.id}>
                <td>{hotelData.id}</td>
                <td>{hotelData.hotel_name}</td>
                <td>{hotelData.num_reviews}</td>
                <td>{hotelData.address}</td>
                <td>{hotelData.num_stars}</td>
                <td>{hotelData.amenities}</td>
                <td>{hotelData.image_url}</td>
                <td>$ {hotelData.snaptravelPrice}</td>
                <td>$ {hotelData.retailPrice}</td>
            </tr>
        )
    }

    render() {
        console.log("hotel data");
        console.log(this.props.hotelData);
        // In here, 
        // Should handle and return hotels that exists in both snap travel and retail
        return (
            <div>
                <table className='table table-hover'>
                    <caption>Hotel Data</caption>
                    <thead>
                        <tr>
                        <th>Hotel Id</th>
                        <th>Hotel Name</th> 
                        <th>Number of reviews</th>
                        <th>Address</th>
                        <th>Number of stars</th>
                        <th>Amenities</th>
                        <th>Image</th>
                        <th>Snap Travel Price</th>
                        <th>Hotel.com Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.hotelData.map(this.renderHotelData)}
                    </tbody>
                </table>
            </div>
        )
    }
}