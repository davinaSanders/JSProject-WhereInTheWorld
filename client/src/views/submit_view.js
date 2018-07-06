const PubSub = require('../helpers/pub_sub.js');

const SubmitView = function (container) {
  this.container = container;
};

SubmitView.prototype.start = function () {
this.container.addEventListener('click', (evt) => {
  PubSub.subscribe('InfoView:info-submitted', evt.target);

// on the click of this button send over all the data and append them to containers. create all the buttons/info/scoring in the separate views. 

});
};

module.exports = SubmitView;
