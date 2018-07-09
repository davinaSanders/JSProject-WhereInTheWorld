const PubSub = require('../helpers/pub_sub.js');
const Map = function () {
};


Map.prototype.initialise = function () {

  const myMap = L.map('map').setView([51.505, -0.09], 1.5);
  const mapElement = document.createElement('div');
  mapElement.classList.add('hidden');
  mapElement.textContent = myMap;



  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 1,
  	maxZoom: 16,
  	ext: 'png'
  }).addTo(myMap);

  PubSub.subscribe('Landmark:landmark-loaded', data => {
    console.log(data);
    const landmarkMarker = L.marker([data.detail.lat, data.detail.long])
    landmarkMarker.addTo(myMap);
  });


  const Icon = L.Icon.extend({
      options: {
          shadowUrl: './images/leaf-shadow.png',
          iconSize:     [38, 95],
          shadowSize:   [50, 64],
          iconAnchor:   [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor:  [-3, -76]
      }
  });

  const icon = new Icon({iconUrl: './images/leaf-green.png'});

  const marker = L.marker();
  function onMapClick(event) {
    console.log(event);
    marker
    .setLatLng(event.latlng)
    // .bindPopup('You clicked the map here')
    .setIcon(icon)
    .addTo(myMap);
  }
  myMap.on('click', onMapClick);

  myMap.refresh = function(timeout){
    window.setTimeout(function(){
      myMap.invalidateSize();
    },timeout);
  };

  myMap.refresh(500);

  PubSub.publish("Map:map-loaded", mapElement);
};



module.exports = Map;
