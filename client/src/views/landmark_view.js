const PubSub = require('../helpers/pub_sub.js');

const LandmarkView = function (container) {
  this.container = container;
};


LandmarkView.prototype.initialise = function () {
  PubSub.subscribe('Landmark:landmark-loaded', (event) => {
    this.display(event.detail);
  });
};

LandmarkView.prototype.display = function (landmark) {
  this.container.innerHTML = " ";
  const image = document.createElement('img')
  image.src = `./images/${landmark.image}`;
  this.container.appendChild(image);
};

module.exports = LandmarkView;
