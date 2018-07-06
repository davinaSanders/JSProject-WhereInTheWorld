const PubSub = require('../helpers/pub_sub.js');

const MapView = function (container) {
this.container = container;
};

MapView.prototype.start = function () {
  PubSub.subscribe('Landmark:landmark-loaded', (evt) => {
    this.display(evt.detail);
  });
  PubSub.subscribe('Map:map-loaded', (evt) => {
    this.display(evt.detail);
  });
};



MapView.prototype.display = function (map) {
  const mapElement = document.createElement('div')
  this.container.appendchild(mapElement);
};

// subscribe SubmitView: answer-submitted == latitude and longitude
module.exports = MapView;
