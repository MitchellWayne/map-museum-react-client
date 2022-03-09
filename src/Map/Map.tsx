import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

require('dotenv').config()

function Map() {
  let map = null;

  const loader = new Loader({
    apiKey: process.env.MAPS_APIKEY as string,
    version: "weekly"
  });

  loader.load()
  .then((google) => {
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 45.9795412, lng: -51.6052898 },
      zoom: 2,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControl: false,
      disableDoubleClickZoom: true,
    });
  })

  return (
    <div className="Map">
      Testing Map
    </div>
  );
}

export default Map;
