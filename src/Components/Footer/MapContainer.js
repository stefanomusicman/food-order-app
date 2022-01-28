import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "35vh",
    width: "75%",
    borderRadius: '10px'
};
  
  const defaultCenter = {
    lat: 45.491880, lng: -73.581540
  }
  
  return (
     <LoadScript
       googleMapsApiKey="AIzaSyBSIglLDqKENlZeE2Drji4T7ZV-PFWqiDo">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={16}
          center={defaultCenter}>
              <Marker position={defaultCenter} />
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;