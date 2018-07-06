const PubSub = require('../helpers/pub_sub.js');
const ScoreView = function (container) {
  this.container = container;
};

// subscribe SubmitView: answer-submitted == latitude and longitude
module.exports = ScoreView;
