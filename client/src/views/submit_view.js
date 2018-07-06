const PubSub = require('../helpers/pub_sub.js');

const SubmitView = function (container) {
  this.container = container;
};


submitButton.addEventListener('click', (evt) => {
  PubSub.publish('GameView:game-delete-clicked', evt.target.value);
});

module.exports = SubmitView;
