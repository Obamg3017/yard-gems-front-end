import { useEffect, useState, useRef } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import toast from "react-hot-toast";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;

import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  Pin,
} from "@vis.gl/react-google-maps";

const locations = [
  { key: "operaHouse", location: { lat: -33.8567844, lng: 151.213108 } },
  { key: "tarongaZoo", location: { lat: -33.8472767, lng: 151.2188164 } },
  { key: "manlyBeach", location: { lat: -33.8209738, lng: 151.2563253 } },
  { key: "hyderPark", location: { lat: -33.8690081, lng: 151.2052393 } },
  { key: "theRocks", location: { lat: -33.8587568, lng: 151.2058246 } },
  { key: "circularQuay", location: { lat: -33.858761, lng: 151.2055688 } },
  { key: "harbourBridge", location: { lat: -33.852228, lng: 151.2038374 } },
  { key: "kingsCross", location: { lat: -33.8737375, lng: 151.222569 } },
  { key: "botanicGardens", location: { lat: -33.864167, lng: 151.216387 } },
  { key: "museumOfSydney", location: { lat: -33.8636005, lng: 151.2092542 } },
  { key: "maritimeMuseum", location: { lat: -33.869395, lng: 151.198648 } },
  { key: "kingStreetWharf", location: { lat: -33.8665445, lng: 151.1989808 } },
  { key: "aquarium", location: { lat: -33.869627, lng: 151.202146 } },
  { key: "darlingHarbour", location: { lat: -33.87488, lng: 151.1987113 } },
  { key: "barangaroo", location: { lat: -33.8605523, lng: 151.1972205 } },
];

function GetPin({yardSale, setYardSale}) {
  const [clickedPosition, setClickedPosition] = useState(null);

  const handleConfirm = (latLng) => {
    console.log(`Location confirmed! ${latLng.lat}, ${latLng.lng}`);
    setYardSale({
        ...yardSale,
        lat: latLng.lat,
        lng: latLng.lng,
      });
  };
  const handleMapClick = (event) => {
    if (!event.detail.latLng) return;

    const latLng = event.detail.latLng; // Capture the latLng from the event
    setClickedPosition(latLng);

    // Dismiss existing toasts
    toast.dismiss();

    // Show toast notification
    toast.custom(
      () => (
        <div
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>Confirm?</span>
          <button
            style={{
              marginLeft: "10px",
              padding: "8px 12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => handleConfirm(latLng)} // Pass latLng directly
          >
            Confirm
          </button>
        </div>
      ),
      { duration: Infinity, position: "top-center" }
    );
  };

  return (
    <APIProvider
      apiKey={apiKey}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        defaultZoom={13}
        mapId={mapId}
        style={{ width: "100vw", height: "90vh" }} // Set cursor style to pointer
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        onClick={(event) => {
          handleMapClick(event);
        }} // Handle map click
      >
        <PoiMarkers pois={locations} clickedPosition={clickedPosition} />
      </Map>
    </APIProvider>
  );
}

const PoiMarkers = (props) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={(marker) => setMarkerRef(marker, poi.key)}
        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
      {props.clickedPosition && (
        <>
          <AdvancedMarker position={props.clickedPosition}>
            <Pin
              background={"#34A853"}
              glyphColor={"#fff"}
              borderColor={"#000"}
            />
          </AdvancedMarker>
        </>
      )}
    </>
  );
};

export default GetPin;