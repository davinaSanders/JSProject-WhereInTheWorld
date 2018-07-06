const PubSub = require('../helpers/pub_sub.js');

const SubmitView = function (container) {
  this.container = container;
};

SubmitView.prototype.start = function () {
this.container.addEventListener('click', (evt) => {
  PubSub.publish('SubmitView:answer-submitted', evt.target);
});
};

module.exports = SubmitView;
