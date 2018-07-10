const PubSub = require('../helpers/pub_sub.js');

const AudioController = function() {
  this.intro = null;
  this.positive = [];
  this.negative = [];
};



AudioController.prototype.initialise = function () {
  this.intro = new Audio('/audio/intro.wav');
  this.intro.play();

  this.positive = [
    new Audio('/audio/congratulations.wav'),
    new Audio('/audio/impressive.wav'),
    new Audio('/audio/well_done.wav')
  ];

  this.negative = [
    new Audio('/audio/oh_no.wav'),
    new Audio('/audio/try_again.wav'),
    new Audio('/audio/unlucky.wav')
  ];

  PubSub.subscribe("Map:user-incorrect", () => {
    const sound = this.negative[Math.floor(Math.random() * this.negative.length)];
    sound.play();
  });

  PubSub.subscribe("Map:user-correct", () => {
    const sound = this.positive[Math.floor(Math.random() * this.positive.length)];
    sound.play();
  });

};
module.exports = AudioController;
