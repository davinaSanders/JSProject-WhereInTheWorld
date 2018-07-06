const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
};


InfoView.prototype.start = function () {
  PubSub.subscribe('Landmark:landmark-loaded', (evt) => {
    this.display(evt.detail);
  });
};

InfoView.prototype.display = function (landmark) {
  const textBox = document.createElement('p')
  textBox.textContent = landmark.climate;
  this.container.appendchild(textBox);
  PubSub.publish('InfoView:info-view', (this.container));
};


module.exports = InfoView;
