const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
  this.landmark = {};
};


InfoView.prototype.initialise = function () {
  PubSub.subscribe('Landmark:landmark-loaded', (event) => {
    this.landmark = event.detail;
  });

  PubSub.subscribe('SubmitView:submit-clicked', (event) => {
    this.display();
  });
};

InfoView.prototype.display = function () {
  const textBox = document.createElement('p')
  
  this.container.appendchild(textBox);
};

module.exports = InfoView;
