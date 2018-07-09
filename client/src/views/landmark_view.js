const PubSub = require('../helpers/pub_sub.js');

const LandmarkView = function (container) {
  this.container = container;
};

LandmarkView.prototype.initialise = function () {
  PubSub.subscribe('Landmark:landmark-loaded', (evt) => {
    this.display(evt.detail);
  });
  this.panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  this.map.setStreetView(this.panorama);
};

LandmarkView.prototype.display = function (landmark) {
  console.log(landmark);
  const landmarkCoords = {lat: landmark.lat, lng:landmark.long};
  this.panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: landmarkCoords,
        pov: {
          heading: 34,
          pitch: 10
        }
      });
  this.map.setStreetView(this.panorama);
};

module.exports = LandmarkView;
