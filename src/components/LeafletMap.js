import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const LeafletMap = () => {
    // using this to avoid the marker icon failure
    // refer: https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-731732137 for more details
    React.useEffect(() => {
        let DefaultIcon = L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow
        });
        
        L.Marker.prototype.options.icon = DefaultIcon;
      }, []);

    return (<div className="map">
        <MapContainer center={[30.817261, 75.171097]} zoom={13} scrollWheelZoom={true} style={{height: '900px', width: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[30.817261, 75.171097]}>
                <Popup>
                Hey, It's my hometown. <br /> Enjoy the view.
                </Popup>
            </Marker>
        </MapContainer>
    </div>)
};

export default LeafletMap;