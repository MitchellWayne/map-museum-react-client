import React, { useState, useEffect, useCallback } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

function Map() {
  let map = null;

  const fetchMap = async () => {
    try {
      let response = await fetch(`/admin/mapsAPI`, {
        method: "GET",
        credentials: "include",
      });
      const parsedResponse = await response.json();

      if (response.status === 200){
        let APIKey = parsedResponse.apikey;
        const loader = new Loader({
          apiKey: APIKey,
          version: "weekly"
        });
      
        loader.load()
        .then((google) => {
          map = new google.maps.Map(document.getElementById("Map") as HTMLElement, {
            center: { lat: 45.9795412, lng: -51.6052898 },
            zoom: 2,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            disableDoubleClickZoom: true,
          });
        });
      } else {
        console.log("Failed to fetch API Key for map");
      }

    } catch(err) {
      console.log('----- APIKey Fetch ERROR -----');
      console.log(err);
    }
  };
  
  fetchMap();

  return (
    <div className="Map w-screen h-screen" id='Map'>
    </div>
  );
}

export default Map;
