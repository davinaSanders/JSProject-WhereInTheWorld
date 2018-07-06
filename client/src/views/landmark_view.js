const PubSub = require('../helpers/pub_sub.js');

const LandmarkView = function (container) {
  this.container = container;
};


LandmarkView.prototype.initialise = function () {
  PubSub.subscribe('Landmark:landmark-loaded', (evt) => {
    this.display(evt.detail);
  });
};

LandmarkView.prototype.display = function (landmark) {
  const image = document.createElement('img')
  image.src = landmark.file_name;
  this.container.appendchild(image);
};
// subscribe "Landmark:landmark-loaded" == an image of the landmark

module.exports = LandmarkView;
