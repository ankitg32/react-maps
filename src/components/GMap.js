import { connect } from 'react-redux';
import { useEffect } from 'react';
import {fetch_default_location} from '../actions/fetch_location';
import GoogleMapReact from 'google-map-react';

const GMap = (props) => {
    useEffect( () => props.dispatch(fetch_default_location()), [props]);
    return (
        <div className="map">
            <GoogleMapReact 
                bootstrapURLKeys= {{ key: 'AIzaSyDJjDUFPx7r77vPcKwOj8kkQ8_DJhej07A' }}
                defaultCenter = {props.center}
                defaultZoom = {props.zoom}
            >
            </GoogleMapReact>
        </div>
    )
}

const mapStateToProps = (state) => ({
    center: {lat: state.lat, lng:state.lng},
    zoom: 11
})

export default connect(mapStateToProps)(GMap);
// export default GMap;