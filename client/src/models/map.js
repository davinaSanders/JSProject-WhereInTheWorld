const PubSub = require('../helpers/pub_sub.js');
const countryBorders = require('./country_borders.js');
const Map = function () {
};

Map.prototype.initialise = function () {
  this.reset();
  PubSub.subscribe('SubmitView:submit-clicked', () => {
    if(this.selecteCountryName === this.landmarkCountry){
      PubSub.publish("Map:user-correct", {});
    } else {
      PubSub.publish("Map:user-incorrect", {});
    }
    this.isInteractive = false;
    this.landmarkMarker.setOpacity(1);
    this.selectedCountry.getPopup().remove();
    this.myMap.flyTo(this.landmarkMarker.getLatLng(),  3);
  });
  PubSub.subscribe('NextView:next-clicked', () => {
    this.reset();
  });
};

Map.prototype.reset = function () {
  if (this.myMap){
    this.myMap.remove();
  };
  this.isInteractive = true;
  this.myMap = L.map('map', {countinuousWorld: 'false'}).setView([51.505, -0.09], 1.5);
  const southWest = L.latLng(-89.98155760646617, -180),
  northEast = L.latLng(89.99346179538875, 180);
  const bounds = L.latLngBounds(southWest, northEast);
  this.myMap.setMaxBounds(bounds);

  const mapElement = document.createElement('div');
  mapElement.classList.add('hidden');
  mapElement.textContent = this.myMap;
  this.selectedCountry = null;


  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 1,
  	maxZoom: 16,
  	ext: 'png'
  }).addTo(this.myMap);

  const onEachFeature = (feature, layer) => {
    const handleClick = (event) => {
      if(!this.isInteractive) return;

      if(!this.selectedCountry){
        PubSub.publish('Map:initial-country-selected', {});
      }
      if(this.selectedCountry){
        this.selectedCountry.setStyle({fillOpacity: 0,
        weight: 0,
        fillOpacity: 0})
      }

      layer.setStyle({
        opacity: 1,
        weight: 4,
        fillColor:"#e28413",
        fillOpacity: 1,
        color: "#000022"
      });

      this.selectedCountry = layer;
      this.selecteCountryName = feature.properties.name.toLowerCase();
    };

    const handleMouseOver = () => {
      layer.bindPopup(`<p>${feature.properties.name}</p>`).openPopup();
      if(!this.isInteractive) return;
      if(layer !== this.selectedCountry){
        layer.setStyle({
          opacity: 1,
          weight: 4,
          fillColor: "#FAFAFF",
          color: "#CCC5B9",
          fillOpacity:1
        });
      }
    };

    const handleMouseOut = (event) => {
      if(!this.isInteractive) return;
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
    }).addTo(this.myMap);


  const yangIcon = L.Icon.extend({options:{
    iconUrl:'/images/Yang.png',
    iconSize: [50, 50]}
  });

  this.landmarkMarker = L.marker()
  PubSub.subscribe('Landmark:landmark-loaded', data => {
    this.landmarkCountry = data.detail.country.toLowerCase();
    this.landmarkMarker.setLatLng(new L.LatLng(data.detail.lat, data.detail.long));
    this.landmarkMarker.addTo(this.myMap).setOpacity(0);
    this.landmarkMarker.setIcon(new yangIcon);
  });


  this.myMap.refresh = (timeout) => {
    window.setTimeout(() => {
      this.myMap.invalidateSize();
    },timeout);
  };

  this.myMap.refresh(500);

  PubSub.publish("Map:map-loaded", mapElement);
};



module.exports = Map;
