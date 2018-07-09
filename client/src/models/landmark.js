const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Landmark = function (url) {
  this.url = url;
};

Landmark.prototype.initialise = function () {
  this.getLandmark();
  PubSub.subscribe('NextView:next-clicked', () => {
    this.getLandmark();
  });
};


Landmark.prototype.getLandmark = function () {
  const request = new Request(this.url);
  request.get()
    .then((landmark) => {
      PubSub.publish('Landmark:landmark-loaded', landmark);
    })
    .catch((err) => console.error(err));
};

module.exports = Landmark;
