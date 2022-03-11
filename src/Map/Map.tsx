import { Loader } from '@googlemaps/js-api-loader';
import { clientProps } from '../interfaces';

function Map(props: clientProps) {
  let map = null;

  const loadMap = (APIKey: string) => {
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
  }

  const fetchMap = async () => {
    try {
      let response = await fetch(`/admin/mapsAPI`, {
        method: "GET",
        credentials: "include",
      });
      const parsedResponse = await response.json();

      if (response.status === 200){
        loadMap(parsedResponse.apikey);
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
    <div className="Map w-screen h-screen z-0" id='Map'>
    </div>
  );
}

export default Map;
