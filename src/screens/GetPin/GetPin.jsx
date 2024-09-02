import { useEffect, useState, useRef } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import toast from "react-hot-toast";
import { getYardSales } from "../../../Services/yard-sales";
import { createYardSale } from "../../../Services/yard-sales";

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;

import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
  Pin,
} from "@vis.gl/react-google-maps";

const yardSales = await getYardSales()

let locations = yardSales.map((yardSale) => {
  return ({
    key: yardSale._id,
    name: yardSale.name,
    location: {lat: yardSale.lat, lng: yardSale.lng},
  })
})

function GetPin({yardSale, setYardSale}) {
  const [clickedPosition, setClickedPosition] = useState(null);
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    if (confirming && yardSale.lat && yardSale.lng) {
      createYardSale(yardSale)
        .then(() => {
          toast.success("Yard sale created successfully!");
        })
        .catch((error) => {
          toast.error("Failed to create yard sale");
          console.error(error);
        })
        .finally(() => {
          setConfirming(false); // Reset confirming state
        });
    }
  }, [yardSale, confirming]);

  const handleConfirm = (latLng) => {
    console.log(`Location confirmed! ${latLng.lat}, ${latLng.lng}`);
    setYardSale({
      ...yardSale,
      lat: latLng.lat,
      lng: latLng.lng,
    });
    setConfirming(true); // Trigger useEffect after setting the state
    toast.dismiss();
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