use where_in_the_world;
db.dropDatabase();

db.landmarks.insertMany([
  {
    name: "Edinburgh Castle",
    image: "Edinburgh Castle.png",
    lat: 55.9486,
    long: -3.1999
  },
  {
    name: "Mount Rushmore",
    image: "Mount Rushmore.png",
    lat: 43.8791,
    long: -103.4591
  },
  {
    name: "Egyptian Pyramids",
    image: "Pyramid.png",
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
