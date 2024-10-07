import "./mapPreview.css"
import 'leaflet/dist/leaflet.css'

import React, { useContext, useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { ClimateContext } from "../../providers/ClimateProvider"
import Loading from "../Loading/Loading"

const ChangeView = ({ latitude, longitude }) => {
    const map = useMap();
    useEffect(() => {
        map.setView([latitude, longitude]);
    }, [latitude, longitude, map]);
    
    return null;
};

const mapPreview = () => {
    const { state } = useContext(ClimateContext) 

    const { longitude, latitude } = state.city;
    
    const isDataAvailable = latitude !== undefined && longitude !== undefined;

  return (
    <>
        {!isDataAvailable ? <Loading /> :
            <MapContainer key={state.city} center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} className="mapCont">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <ChangeView latitude={latitude} longitude={longitude} />
          </MapContainer>
        }
    </>
  )
}

export default mapPreview