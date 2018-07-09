const PubSub = require('../helpers/pub_sub.js');

const SubmitView = function(buttonElement, handlerToRemove) {
  this.buttonElement = buttonElement;
  this.handlerToRemove = handlerToRemove;
};

SubmitView.prototype.initialise = function () {
  this.setup();
  PubSub.subscribe('NextView:next-clicked', () => {
    this.setup();
  });
};


SubmitView.prototype.setup = function () {
  this.handler = (event) => {
    PubSub.publish('SubmitView:submit-clicked', {});
  };

  this.buttonElement.removeEventListener('click', this.handlerToRemove);

  this.buttonElement.removeChild(this.buttonElement.childNodes[0]);
  const textContent = document.createTextNode('I found Yang');
  this.buttonElement.appendChild(textContent);
  this.buttonElement.addEventListener("click", this.handler);
};


module.exports = SubmitView;
