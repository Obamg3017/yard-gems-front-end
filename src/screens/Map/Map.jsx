import { useEffect, useState, useRef } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { getYardSales } from "../../../Services/yard-sales.js";
import { useNavigate } from "react-router-dom";

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

function GoogleMap({yardSale, setYardSale}) {

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
        }} // Handle map click
      >
        <PoiMarkers pois={locations} yardSale={yardSale} setYardSale={setYardSale}/>
      </Map>
    </APIProvider>
  );
}

const PoiMarkers = (props) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);
  const navigate = useNavigate();
  const [pinClicked, setPinClicked] = useState(false);



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

  useEffect(() => {
    if(pinClicked) {
      navigate('/yard-sale')
    }
    setPinClicked(false)
  }, [navigate, pinClicked]);

  const handleMarkerClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    // Find the yard sale that matches the clicked location
    const matchingYardSale = props.pois.find(poi => 
      poi.location.lat === lat && poi.location.lng === lng
    );

    if (matchingYardSale) {
      console.log('Matching Yard Sale:', matchingYardSale);
      props.setYardSale({
        ...props.yardSale,
        yardOwner: matchingYardSale.key
      });

      setPinClicked(true)
    } else {
      console.log('No matching yard sale found.');
    }
  };

  return (
    <>
      {props.pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={(marker) => setMarkerRef(marker, poi.key)}
          onClick={(event) => handleMarkerClick(event)} // Pass the marker instance directly

        >
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default GoogleMap;
