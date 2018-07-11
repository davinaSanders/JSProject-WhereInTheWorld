const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
  this.landmark = {};
};


InfoView.prototype.initialise = function () {
  PubSub.subscribe('Landmark:landmark-loaded', (event) => {
    this.landmark = event.detail;
  });

  PubSub.subscribe('SubmitView:submit-clicked', (event) => {
    this.display();
  });
};

InfoView.prototype.display = function () {
  this.container.innerHTML= " ";
  const imageElement = document.createElement('img');
  imageElement.src = `./images/${this.landmark.image}`;
  imageElement.alt = `${this.landmark.name}`;
  imageElement.classList.add('small-image');
  this.container.appendChild(imageElement);

  this.addFact(`This is a picture of ${this.landmark.name}`, 'h2');
  this.addFact(`Did you know ${this.landmark.landmark_fact}`, 'p');
  this.addFact(`You will find ${this.landmark.name} in ${this.landmark.country}`, 'p');
  this.addFact(`${this.landmark.population} people live in ${this.landmark.country}`, 'p');
  this.addFact(`Did you know ${this.landmark.country_fact}`, 'p');
  this.addFact(`The continent you are in is ${this.landmark.continent}`, 'p');
};

InfoView.prototype.addFact = function (text, type) {
  const element = document.createElement(type);
  element.textContent = text;
  this.container.appendChild(element);
};

module.exports = InfoView;
