const PubSub = require('../helpers/pub_sub.js');
const countryBorders = require('./country_borders.js');
const Map = function () {
};


Map.prototype.initialise = function () {
  const myMap = L.map('map', {countinuousWorld: 'false'}).setView([51.505, -0.09], 1.5);

  const southWest = L.latLng(-89.98155760646617, -180),
  northEast = L.latLng(89.99346179538875, 180);
  const bounds = L.latLngBounds(southWest, northEast);
  myMap.setMaxBounds(bounds);

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

  this.selectedCountry = null;
  const onEachFeature = function(feature, layer) {
    const handleClick = (event) => {
      if(this.selectedCountry){
        this.selectedCountry.setStyle({fillOpacity: 0,
        weight: 0,
        fillOpacity: 0})
      }

      layer.setStyle({
        opacity: 1,
        weight: 4,
        fillColor:"#35Ce8d",
        fillOpacity: 1,
        color: "#5c946e"
      });

      layer.bindPopup(feature.properties.name).openPopup();
      this.selectedCountry = layer;
    };

    const handleMouseOver = () => {
      if(layer !== this.selectedCountry){
        layer.setStyle({
          opacity: 1,
          weight: 4,
          fillColor: "#30c5ff",
          color: "#2C7DFF",
          fillOpacity:1
        });
      }
    };

    const handleMouseOut = (event) => {
      if(this.selectedCountry !== layer){
        layer.setStyle({
          fillOpacity: 0,
          weight: 0
        });
      }
    };

    layer.on({
      click:handleClick,
      mouseover: handleMouseOver,
      mouseout: handleMouseOut
    });
  };

  L.geoJson(countryBorders(), {
    onEachFeature: onEachFeature,
    interactive:'true',
    style: {
      "fillOpacity": 0,
      "weight": 0
    }
    }).addTo(myMap);

  this.landmarkMarker = L.marker()
  PubSub.subscribe('Landmark:landmark-loaded', data => {
    this.landmarkMarker.setLatLng(new L.LatLng(data.detail.lat, data.detail.long));
    this.landmarkMarker.addTo(myMap);
  });


  myMap.refresh = function(timeout){
    window.setTimeout(function(){
      myMap.invalidateSize();
    },timeout);
  };

  myMap.refresh(500);

  PubSub.publish("Map:map-loaded", mapElement);
};



module.exports = Map;
