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
    name: "Egyptian Pyramids",
    image: "Pyramid.png",
    landmark_fact: "The largest pyramid is called the Great Pyramid of Giza. It's estimated that this pyramid was made from 2.3 million blocks of rock weighing 5.9 million tons.",
    country: "Egypt",
    population: "97.55 million",
    country_fact: "The Nile river flows through Egypt and is 4,258 miles long.",
    continent: "Africa",
    lat: 29.9773,
    long: 31.1325
  }
  // {
  //   name: "Arc de Triomphe"
  // },
  // {
  //   name: "Victoria Falls"
  // },
  // {
  //   name: "Machu Picchu"
  // },
  // {
  //   name: "Moai"
  // },
  // {
  //   name: "CN Tower"
  // },
  // {
  //   name: "Taj Mahal"
  // },
  // {
  //   name: "Tower Bridge"
  // }
]);
