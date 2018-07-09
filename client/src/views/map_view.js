const PubSub = require('../helpers/pub_sub.js');
const MapView = function (element) {
  this.element = element;
};


MapView.prototype.initialise = function () {

  PubSub.subscribe("Map:map-loaded", (event) => {
    const mapElement = event.detail;
    this.element.appendChild(mapElement);
  });


};



module.exports = MapView;
