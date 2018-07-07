const PubSub = require('../helpers/pub_sub.js');
const MapView = function (element) {
  this.element = element;
};


MapView.prototype.initialise = function () {
  const myMap = L.map('map').setView([51.505, -0.09], 2);
  const mapElement = document.createElement('div');
  mapElement.classList.add('hidden');
  mapElement.textContent = myMap;
  this.element.appendChild(mapElement);

  const Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 1,
  	maxZoom: 16,
  	ext: 'png'
  }).addTo(myMap);

  const popup = L.popup();
  function onMapClick(event) {
    console.log(event);
    popup
    .setLatLng(event.latlng)
    .setContent('You clicked the map at ' + event.latlng.toString())
    .openOn(myMap);
  }
  myMap.on('click', onMapClick);
  
  myMap.refresh = function(timeout){
    window.setTimeout(function(){
      myMap.invalidateSize();
    },timeout);
  };
  mapElement.classList.remove('hidden');
  myMap.refresh(500);

};



module.exports = MapView;
