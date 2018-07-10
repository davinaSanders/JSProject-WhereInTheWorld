use where_in_the_world;
db.dropDatabase();

db.landmarks.insertMany([
  {
    name: "Edinburgh Castle",
    image: "Edinburgh Castle.png",
    landmark_fact: "Edinburgh Castle was built on the extinct volcano of Castle Rock.",
    country: "Scotland",
    population: "5.45 million",
    country_fact: "Scotland has over 790 offshore islands",
    continent: "Europe",
    lat: 55.9486,
    long: -3.1999
  },
  {
    name: "Mount Rushmore",
    image: "Mount Rushmore.png",
    landmark_fact: "Mount Rushmore features 60-foot sculptures of the heads of four United States presidents: George Washington, Thomas Jefferson, Theodore Roosevelt  and Abraham Lincoln",
    country: "United States of America",
    population: "324.46 million",
    country_fact: "Most of the world's tornadoes occur in the Midwest region of the USA known as 'Tornado Alley'",
    continent: "North America",
    lat: 43.8791,
    long: -103.4591
  },
  {
    name: "The Egyptian Pyramids",
    image: "Pyramid.png",
    landmark_fact: "The largest pyramid is called the Great Pyramid of Giza. It's estimated that this pyramid was made from 2.3 million blocks of rock weighing 5.9 million tons.",
    country: "Egypt",
    population: "97.55 million",
    country_fact: "The Nile river flows through Egypt and is 4,258 miles long.",
    continent: "Africa",
    lat: 29.9773,
    long: 31.1325
  },
  {
    name: "Machu Picchu",
    image: "Machu_Pichu.png",
    landmark_fact: "Machu Picchu is sometimes called the 'lost city' because it lay abandoned for nearly 400 years before it was re-discovered in 1911.",
    country: "Peru",
    population: "32.17 million",
    country_fact: "Peru has more than 25,000 types of plant and almost 5,000 species of fish and animals.",
    continent: "South America",
    lat: -13.163068,
    long: -72.545128
  },
  {
    name: "Uluru – Australia's Ayers Rock",
    image: "Uluru.png",
    landmark_fact: "The rock was created over 600 million years ago. The Aborigines have lived there for 10,000 years.",
    country: "Australia",
    population: "24.45 million",
    country_fact: "A desert area known as the 'outback' covers much of the land.",
    continent: "Oceania",
    lat: -25.34449,
    long: 131.035431
  },
  {
    name: "Taj Mahal",
    image: "Taj Mahal.png",
    landmark_fact: "The name Taj Mahal means 'crown of palaces'.",
    country: "India",
    population: "1.33 billion",
    country_fact: "India experiences periods of heavy rain called Monsoon.",
    continent: "Asia",
    lat: 27.173891,
    long: 78.042068
  },
  {
    name: "The Ross Ice Shelf",
    image: "Ross_Ice_Shelf.png",
    landmark_fact: "The largest ice shelf in Antarctica - it is about the size of France.",
    country: "Antarctica",
    population: "1,000",
    country_fact: "Antarctica is the southernmost continent on Earth.",
    continent: "Antarctica",
    lat:  -81.5000,
    long: 175.0000
  }
]);
