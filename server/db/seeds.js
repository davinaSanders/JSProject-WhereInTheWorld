use where_in_the_world;
db.dropDatabase();

db.landmarks.insertMany([
  {
    name: "Edinburgh Castle",
    image: "Edinburgh Castle.png"
  },
  {
    name: "Mount Rushmore",
    image: "Mount Rushmore.png"
  },
  {
    name: "Egyptian Pyramids",
    image: "Pyramid.png"
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
