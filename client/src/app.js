
const InfoView = require('./views/info_view.js')
const LandmarkView = require('./views/landmark_view.js');
const MapView = require('./views/map_view.js');
const NextView = require('./views/next_view.js');
const ScoreView = require('./views/score_view.js');
const SubmitView = require('./views/submit_view.js');
const Landmark = require('./models/landmark.js');

document.addEventListener('DOMContentLoaded', () => {
console.log('js loaded');

const landmarkContainer = document.querySelector("#landmark");
const landmarkView = new LandmarkView(landmarkContainer);
landmarkView.start();

const submitContainer = document.querySelector("#submit-button");
const submitView = new SubmitView(submitContainer);
submitView.start();

const landmarkURL = 'http://localhost:3000/api/landmark';
const landmark = new Landmark(landmarkURL);
landmark.getLandmark();
  });
