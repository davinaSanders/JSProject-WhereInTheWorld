const PubSub = require('../helpers/pub_sub.js');

const NextView = function(buttonElement, handler, handlerToRemove) {
  this.buttonElement = buttonElement;
  this.handler = handler;
  this.handlerToRemove = handlerToRemove;
};

NextView.prototype.initialise = function () {
  PubSub.subscribe('SubmitView:submit-clicked', () => {
    this.setup();
  });
};

NextView.prototype.setup = function () {
  this.buttonElement.removeEventListener('click', this.handlerToRemove);
  this.buttonElement.removeChild(this.buttonElement.childNodes[0]);
  const textContent = document.createTextNode('Play again');
  this.buttonElement.appendChild(textContent);
  this.buttonElement.addEventListener("click", this.handler);
};

module.exports = NextView;
