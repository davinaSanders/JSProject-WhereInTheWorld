const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Landmark = function (url) {
  this.url = url;
};


Landmark.prototype.getLandmark = function () {
  const request = new Request(this.url);
  request.get()
    .then((landmark) => {
      console.log(landmark);
      PubSub.publish('Landmark:landmark-loaded', landmark);
    });
    .catch(console.error);
};

module.exports = Landmark;
