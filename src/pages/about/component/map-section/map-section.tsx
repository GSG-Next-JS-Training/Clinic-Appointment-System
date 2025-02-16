import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Box from "@mui/material/Box";

const clinicPosition: [number, number] = [40.73061, -73.935242]; 

const clinicIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

const ClinicMap: React.FC = () => {
    return (
        <Box sx={{ height: "400px", width: "100%" }}>
            <MapContainer center={clinicPosition} zoom={15} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={clinicPosition} icon={clinicIcon}>
                    <Popup>
                        🏥 <b>Doctor Clinic</b> <br /> 123 Main Street, New York, NY <br />
                    </Popup>
                </Marker>
            </MapContainer>
        </Box>
    );
};

export default ClinicMap;
