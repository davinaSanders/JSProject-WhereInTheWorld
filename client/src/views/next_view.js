const PubSub = require('../helpers/pub_sub.js');

const NextView = function(buttonElement, handlerToRemove) {
  this.buttonElement = buttonElement;
  this.handlerToRemove = handlerToRemove;
};

NextView.prototype.initialise = function () {
  PubSub.subscribe('SubmitView:submit-clicked', () => {
    this.setup();
  });
};

NextView.prototype.setup = function () {
  this.handler = (event) => {
    PubSub.publish('NextView:next-clicked', {});
  };

  this.buttonElement.removeEventListener('click', this.handlerToRemove);
  this.buttonElement.removeChild(this.buttonElement.childNodes[0]);
  const textContent = document.createTextNode('Play again');
  this.buttonElement.appendChild(textContent);
  this.buttonElement.addEventListener("click", this.handler);
};

module.exports = NextView;
