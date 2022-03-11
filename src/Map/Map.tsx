import React, { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { clientPropSet } from '../interfaces';

const Map = React.memo((props: clientPropSet) => {
  console.log(' --- Rendered map ---');

  // States and variables -----------------------------------------------------
  let map: google.maps.Map | null = null;
  let key = '';

  const { setNoteActive, setLatlng } = props;

  // Methods ------------------------------------------------------------------
  const fetchMap = async () => {
    if (key === '') {
      try {
        let response = await fetch(`/admin/mapsAPI`, {
          method: "GET",
          credentials: "include",
        });
        const parsedResponse = await response.json();

        if (response.status === 200){
          key = parsedResponse.apikey;
        } else {
          console.log("Failed to fetch API Key for map");
        }

      } catch(err) {
        console.log('--- !!! APIKey Fetch ERROR !!! ---');
        console.log(err);
      }
    }
  };

  const loadMap = async (APIKey: string) => {
    const loader = new Loader({
      apiKey: APIKey,
      version: "weekly"
    });
  
    await loader.load()
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
  }

  const attachMapListeners = () => {
    if (map) {
      console.log('--- Map listeners attached ---')
      map.addListener('dblclick', (mouseEvent: google.maps.MapMouseEvent) => {
        setLatlng(mouseEvent.latLng?.toString());
        setNoteActive(true);
      });
    } else {
      console.log('--- !!! Failed to attach map listeners !!! ---')
    }
  }
  
  // Lifecycles ---------------------------------------------------------------

  useEffect(() => {
    async function loadMapAsync(){
      await fetchMap();
      await loadMap(key);
      attachMapListeners();
    }
    loadMapAsync();
  });

  return (
    <div className="Map w-screen h-screen z-0" id='Map'>
    </div>
  );
})

export default Map;
