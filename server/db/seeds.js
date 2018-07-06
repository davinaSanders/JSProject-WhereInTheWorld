use where_in_the_world;
db.dropDatabase();

db.landmarks.insertMany([
  {
    name: "Edinburgh Castle"
  },
  {
    name: "Mount Rushmore"
  },
  {
    name: "Egyptian Pyramids"
  },
  {
    name: "Arc de Triomphe"
  },
  {
    name: "Victoria Falls"
  },
  {
    name: "Machu Picchu"
  },
  {
    name: "Moai"
  },
  {
    name: "CN Tower"
  },
  {
    name: "Taj Mahal"
  },
  {
    name: "Tower Bridge"
  }
]);
