const PubSub = require('../helpers/pub_sub.js');

const SubmitView = function(buttonElement, handler, handlerToRemove) {
  this.buttonElement = buttonElement;
  this.handler = handler;
  this.handlerToRemove = handlerToRemove;
  this.initialHandler = function () {alert("Don't forget to pick a Country")};
};

SubmitView.prototype.initialise = function () {
  this.setup();
  PubSub.subscribe('NextView:next-clicked', () => {
    this.setup();
  });
  PubSub.subscribe('Map:initial-country-selected', () => {
    this.buttonElement.removeEventListener('click', this.initialHandler);
    this.buttonElement.addEventListener("click", this.handler);
  });
};


SubmitView.prototype.setup = function () {
  this.buttonElement.removeEventListener('click', this.handlerToRemove);
  this.buttonElement.removeChild(this.buttonElement.childNodes[0]);
  const textContent = document.createTextNode('I found Yang');
  this.buttonElement.appendChild(textContent);
  this.buttonElement.addEventListener("click", this.initialHandler);
};


module.exports = SubmitView;
