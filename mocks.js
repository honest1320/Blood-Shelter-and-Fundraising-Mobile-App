const locations = [
  {
    name: "Adapazari",
    coordinates: { latitude: 40.774936, longitude: 30.401709 },
  },
  {
    name: "Serdivan",
    coordinates: { latitude: 40.75908, longitude: 30.362993 },
  },
  {
    name: "Arifiye",
    coordinates: { latitude: 40.714243, longitude: 30.362997 },
  },
  {
    name: "Sapanca",
    coordinates: { latitude: 40.692147, longitude: 30.266129 },
  },
  { name: "Izmit", coordinates: { latitude: 40.845091, longitude: 30.084221 } },
  {
    name: "Kaynarca",
    coordinates: { latitude: 41.032859, longitude: 30.304993 },
  },
  { name: "Gebze", coordinates: { latitude: 40.795315, longitude: 29.433929 } },
  {
    name: "Karasu",
    coordinates: { latitude: 41.093088, longitude: 30.692371 },
  },
  {
    name: "Kocaali",
    coordinates: { latitude: 41.053229, longitude: 30.855529 },
  },
  {
    name: "Ferizli",
    coordinates: { latitude: 40.936794, longitude: 30.487583 },
  },
  { name: "Hendek", coordinates: { latitude: 40.79538, longitude: 30.742969 } },
  {
    name: "Akyazi",
    coordinates: { latitude: 40.676233, longitude: 30.629993 },
  },
];

const Images = [
  { image: require("./assets/news/NewsSudan1.jpg") },
  { image: require("./assets/news/NewsSudan2.jpg") },
  { image: require("./assets/news/NewsSudan3.jpg") },
  { image: require("./assets/news/NewsSudan4.jpeg") },
  { image: require("./assets/news/NewsSudan5.jpg") },
  { image: require("./assets/news/syria.jpg") },
];

export const sliderImages = [
  { image: require("./assets/news/Slider1.jpeg") },
  { image: require("./assets/news/Slider2.jpg") },
  { image: require("./assets/news/Slider3.jpg") },
  { image: require("./assets/news/Slider4.jpg") },
];

export const charities = [
  {
    // image: Images[5].image,
    image: Images[5].image,
    title: "Humanitarian Relief for Palestine",
    //description:
    //  "Nulla non nibh ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris nec molestie tortor. Duis venenatis ipsum ut magna porta, quis posuere eros euismod. Morbi sodales dui vitae tristique tincidunt. Nam cursus placerat augue, a semper eros gravida bibendum. Proin sem ante, dignissim eget urna sit amet, pharetra aliquet odio. Duis efficitur consequat quam, id pulvinar justo tempor at. In feugiat urna at ipsum pulvinar rutrum. Vestibulum at tristique neque, ut cursus nulla. Proin rutrum sodales lacinia. Sed id convallis tellus. Nunc ut ultrices orci, in lacinia velit. Quisque sit amet orci finibus, pulvinar arcu eu, vehicula nulla. Quisque ligula ipsum, sollicitudin feugiat consequat ut, elementum in ligula. Vivamus sapien lacus, mollis vel urna non, finibus finibus ligula.",
    description:
      "Two-thirds of the population of Gaza — around 1.3 million people — are unable to feed their families due to decades of conflict. The political unrest in the Gaza strip and ongoing sea, land and air blockades along the West Bank leaves the region reliant on imports. This means Palestine is very vulnerable to global shocks and rising food prices. As one of its biggest importers of wheat flour and oil, the war in Ukraine has led to soaring food prices in Palestine – a 3.7% increase in a year.",
    author: "Afad",
    currentPrice: 500000,
    goalPrice: 1400000,
    publishedAt: "26/4/2023",
  },
  {
    image: Images[0].image,
    title: "​Water Well Donation in Sudan Villages",
    description:
      "With the vision of alleviation of the human suffering, Turkish Red Crescent launches the technological, long-living, multi-functional water well projects to prevent the problems with the help of you, our sensitive donors. To reach out many more people in need, you can make (20₺) general donation to Water Well Projects by sending an SMS containing the word SUKUYUSU to 2868, available via all GSM operators.",
    author: "Kizilay",
    currentPrice: 60000,
    goalPrice: 190000,
    publishedAt: "14/11/2022",
  },
  {
    image: Images[4].image,
    title: "Deprem Bağışları",
    description:
      "Cumhurbaşkanlığımız tarafından vatandaşlarımızın yapacağı yardımların AFAD Başkanlığınca koordine edilmesi uygun görülmüş olup, yardımlarınızı banka hesap numaralarının yanı sıra çevrimiçi olarak buradan yapabilirsiniz. Bahse konu talepleri karşılıksız bırakmamak adına, afetzedeler için deprem başlığı altında yardımlar kabul edilmektedir. Bağışlar, afad.gov.tr üzerindeki sanalPOS, banka hesapları ve SMS üzerinden yapılabilmektedir.",
    author: "Aaron",
    currentPrice: 1700000,
    goalPrice: 2000000,
    publishedAt: "1/12/2013",
  },
  {
    image: Images[1].image,
    title: "Pellentesque faucibus tempor mi eget tincidunt",
    description:
      "Fusce elit mi, tincidunt quis nisl commodo, ultrices ornare sem. Phasellus purus mauris, bibendum sit amet leo eu, tempor vestibulum neque. Pellentesque lacinia nisl rutrum tempor tincidunt. Proin vehicula felis non ligula sollicitudin placerat ut nec mauris. Ut cursus vehicula fringilla. Curabitur egestas molestie tortor, vitae maximus velit auctor in. Sed quis cursus turpis, lacinia interdum dolor. Morbi et dui justo. Ut facilisis a massa vitae porttitor. Cras mauris orci, ornare in ex sed, dapibus semper mauris. Proin in sapien est.",
    author: "Grace",
    currentPrice: 50000,
    goalPrice: 1000000,
    publishedAt: "27/6/2010",
  },
  {
    image: Images[2].image,
    title: "Fusce eget orci non sapien gravida sagittis",
    description:
      "Etiam quis tortor vel ex egestas varius a et metus. Sed ultrices urna turpis, et tempus dolor dignissim et. Integer placerat quis nulla ac vestibulum. Sed at faucibus libero. Aenean hendrerit lorem euismod turpis consectetur cursus. Mauris venenatis odio sit amet enim imperdiet pulvinar. Phasellus dignissim risus vitae tellus elementum convallis. Pellentesque elementum est lectus, vel feugiat urna malesuada sit amet. Proin quis enim ac ipsum fermentum iaculis sed vel sapien. Maecenas quis libero eget nisl faucibus laoreet.",
    author: "Audrey",
    currentPrice: 8000,
    goalPrice: 190000,
    publishedAt: "17/10/2010",
  },
  {
    image: Images[3].image,
    title: "Donec eleifend id nunc quis semper",
    description:
      "Suspendisse condimentum velit non purus varius, auctor maximus est aliquam. Aliquam volutpat arcu id justo fringilla posuere. Maecenas massa metus, blandit at varius vel, fermentum vitae odio. Ut non metus maximus, suscipit metus et, mattis dui. Duis vestibulum velit eget tempus pretium. Duis elit diam, finibus et lectus nec, auctor malesuada neque. Fusce congue faucibus consequat.",
    author: "Rachel",
    currentPrice: 500000,
    goalPrice: 1400000,
    publishedAt: "21/4/2023",
  },

  // {
  //   title: "Aliquam imperdiet auctor nisl, vel malesuada magna malesuada quis",
  //   description:
  //     "Sed ac commodo ligula. Morbi suscipit mi eget tortor euismod, a congue nibh finibus. Ut dapibus ut odio sit amet vehicula. Nulla congue posuere ligula ac pulvinar. Suspendisse potenti. Nulla libero odio, suscipit ut mattis non, tempor molestie diam. Nam sed ex mollis, luctus nisi at, rhoncus sapien. Integer eu ligula metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  //   author: "Jonathan",
  //   publishedAt: "6/3/2015",
  // },
  // {
  //   title: "Aenean varius ultrices ipsum.",
  //   description:
  //     "Nulla non nibh ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris nec molestie tortor. Duis venenatis ipsum ut magna porta, quis posuere eros euismod. Morbi sodales dui vitae tristique tincidunt. Nam cursus placerat augue, a semper eros gravida bibendum. Proin sem ante, dignissim eget urna sit amet, pharetra aliquet odio. Duis efficitur consequat quam, id pulvinar justo tempor at. In feugiat urna at ipsum pulvinar rutrum. Vestibulum at tristique neque, ut cursus nulla. Proin rutrum sodales lacinia. Sed id convallis tellus. Nunc ut ultrices orci, in lacinia velit. Quisque sit amet orci finibus, pulvinar arcu eu, vehicula nulla. Quisque ligula ipsum, sollicitudin feugiat consequat ut, elementum in ligula. Vivamus sapien lacus, mollis vel urna non, finibus finibus ligula.",
  //   author: "Kevin",
  //   publishedAt: "3/11/2010",
  // },
  // {
  //   title:
  //     "Quisque sit amet nunc euismod, faucibus arcu sit amet, sollicitudin mi",
  //   description:
  //     "Sed purus urna, egestas ac dolor vehicula, cursus mattis turpis. Fusce ultrices vestibulum justo, sed congue ligula blandit ut. In vitae justo aliquam, molestie dui eu, varius odio. Praesent blandit vestibulum luctus. Nullam venenatis auctor magna quis cursus. Praesent ut ornare massa. Donec non diam ante.",
  //   author: "Matthew",
  //   publishedAt: "18/11/2010",
  // },
  // {
  //   title: "Sed et diam volutpat nisi aliquet tempor",
  //   description:
  //     "Praesent nec euismod ex. Cras pharetra auctor imperdiet. Maecenas nisi ipsum, tristique eu metus eu, tincidunt accumsan nibh. Aenean et purus faucibus, fermentum risus eget, posuere diam. Fusce eget orci non sapien gravida sagittis. Curabitur placerat condimentum tortor. Duis cursus feugiat sem, quis convallis mi lobortis vitae. Praesent in dui mi. Ut egestas consectetur massa, vitae vulputate diam feugiat vitae. Nam tincidunt dui massa, et lacinia arcu cursus a. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu malesuada elit. Praesent accumsan venenatis leo eget tempor. Quisque luctus consequat faucibus.",
  //   author: "Rebecca",
  //   publishedAt: "6/6/2018",
  // },
];

export { locations };
