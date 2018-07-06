const PubSub = require('../helpers/pub_sub.js');

button.addEventListener('click', (evt) => {
  PubSub.publish('GameView:game-delete-clicked', evt.target.value);
});
module.exports = NextView;
