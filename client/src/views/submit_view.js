const PubSub = require('../helpers/pub_sub.js');

const SubmitView = function(buttonElement) {
this.buttonElement = buttonElement;
};

SubmitView.prototype.initialise = function () {
  this.setup();
  PubSub.subscribe('NextView:next-clicked', () => {
    this.setup();
  });
};


SubmitView.prototype.setup = function () {
  this.buttonElement.onClick = null;
  const textContent = document.createTextNode('I found Yang');
  this.buttonElement.appendChild(textContent);
  this.buttonElement.addEventListener("click", (event) => {
    PubSub.publish('SubmitView:submit-clicked', {});
  });
};


module.exports = SubmitView;
