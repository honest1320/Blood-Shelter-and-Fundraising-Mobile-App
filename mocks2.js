const Images = [
  { image: require("./assets/image/adapazari.jpg") },
  { image: require("./assets/image/serdivan.jpg") },
  { image: require("./assets/image/arifiye.jpg") },
  { image: require("./assets/image/sapanca.jpg") },
  { image: require("./assets/image/izmit.jpg") },
  { image: require("./assets/image/kaynarca.png") },
  { image: require("./assets/image/gebze.jpg") },
  { image: require("./assets/image/karasu.jpg") },
  { image: require("./assets/image/kocaali.jpg") },
  { image: require("./assets/image/ferizli.jpg") },
  { image: require("./assets/image/hendek.jpg") },
  { image: require("./assets/image/akyazi.png") },
];

export const maujanja = [
  {
    coordinates: { latitude: 40.774936, longitude: 30.401709 },

    title: "Adapazari",
    description: "Kent meydani",
    image: Images[0].image,
  },
  {
    coordinates: { latitude: 40.75908, longitude: 30.362993 },

    title: "Serdivan",
    description: "This is the second best food place",
    image: Images[1].image,
    rating: 5,
    reviews: 102,
  },
  {
    coordinates: { latitude: 40.714243, longitude: 30.362997 },

    title: "Arifiye",
    description: "This is the third best food place",
    image: Images[2].image,
    rating: 3,
    reviews: 220,
  },
  {
    coordinates: { latitude: 40.692147, longitude: 30.266129 },

    title: "Sapanca",
    description: "This is the fourth best food place",
    image: Images[3].image,
  },
  {
    coordinates: { latitude: 40.845091, longitude: 30.084221 },
    title: "Izmit",
    description: "This is the fifth best food place",
    image: Images[4].image,
  },
  {
    coordinates: { latitude: 41.032859, longitude: 30.304993 },
    title: "Kaynarca",
    description: "This is the fifth best food place",
    image: Images[5].image,
  },
  {
    coordinates: { latitude: 40.795315, longitude: 29.433929 },
    title: "Gebze",
    description: "This is the fifth best food place",
    image: Images[6].image,
  },
  {
    coordinates: { latitude: 41.093088, longitude: 30.692371 },
    title: "Karasu",
    description: "This is the fifth best food place",
    image: Images[7].image,
  },
  {
    coordinates: { latitude: 41.053229, longitude: 30.855529 },
    title: "Kocaali",
    description: "This is the fifth best food place",
    image: Images[8].image,
  },
  {
    coordinates: { latitude: 40.936794, longitude: 30.487583 },
    title: "Ferizli",
    description: "This is the fifth best food place",
    image: Images[9].image,
  },
  {
    coordinates: { latitude: 40.79538, longitude: 30.742969 },
    title: "Hendek",
    description: "This is the fifth best food place",
    image: Images[10].image,
  },
  {
    coordinates: { latitude: 40.676233, longitude: 30.629993 },
    title: "Akyazi",
    description: "This is the fifth best food place",
    image: Images[11].image,
  },
];

const shelters = [
  {
    name: "ARİF NİHAT ASYA ÖĞRENCİ YURDU",
    phone: "0512345670",
    capacity: 200,
    available_rooms: 50,
    latitude: 40.7749,
    longitude: 30.3827,
  },
  {
    name: "AYŞE HÜMEYRA ÖĞRENCİ YURDU",
    phone: "0598543210",
    capacity: 150,
    available_rooms: 30,
    latitude: 40.7673,
    longitude: 30.3992,
  },
  {
    name: "SABAHATTIN ZAIM ÖĞRENCİ YURDU",
    phone: "0590075132",
    capacity: 180,
    available_rooms: 60,
    latitude: 40.7757,
    longitude: 30.4132,
  },
  {
    name: "RAHİME SULTAN ÖĞRENCİ YURDU",
    phone: "0534436285",
    capacity: 190,
    available_rooms: 40,
    latitude: 40.7814,
    longitude: 30.4216,
  },
  {
    name: "DEVLET HATUN ÖĞRENCİ YURDU",
    phone: "0599134377",
    capacity: 220,
    available_rooms: 80,
    latitude: 40.7706,
    longitude: 30.4202,
  },

  {
    name: "SABAHATTİN ZAİM ÖĞRENCİ YURDU",
    phone: "0542116079",
    capacity: 250,
    available_rooms: 70,
    latitude: 40.7911,
    longitude: 30.4088,
  },
  {
    name: "HAVZA ÖĞRENCİ YURDU",
    phone: "0517096668",
    capacity: 210,
    available_rooms: 45,
    latitude: 40.7959,
    longitude: 30.3894,
  },
  {
    name: "ÇARŞAMBA ÖĞRENCİ YURDU",
    phone: "0559621114",
    capacity: 230,
    available_rooms: 55,
    latitude: 40.7912,
    longitude: 30.3758,
  },
  {
    name: "MÜNEVVER AYAŞLI YURDU",
    phone: "0589041557",
    capacity: 160,
    available_rooms: 25,
    latitude: 40.7821,
    longitude: 30.3661,
  },
  {
    name: "TURGUT ÖZAL ÖĞRENCİ YURDU",
    phone: "0566432039",
    capacity: 205,
    available_rooms: 65,
    latitude: 40.7668,
    longitude: 30.3689,
  },
];

export { shelters };
