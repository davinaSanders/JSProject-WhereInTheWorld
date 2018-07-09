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
  imageElement.classList.add('small-image');
  this.container.appendChild(imageElement);

  const landmarkName = document.createElement('h2');
  const nameText = `This is a picture of ${this.landmark.name}`;
  landmarkName.textContent = nameText;
  this.container.appendChild(landmarkName);


  const textBox = document.createElement('p');
  this.container.appendChild(textBox);
};

module.exports = InfoView;
