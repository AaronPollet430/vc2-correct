const accommodatieData = [
  {
    id: 1,
    img: './img/accommodatie_01.jpeg',
    title: 'Chalet Tropical',
    location: 'Málaga',
    rating: 5,
    price: 132,
    kamers: 3,
    accommodatieType: 'Villa',
    faciliteiten: [
      'wifi',
      'buitenzwembad',
      'parking',
      'autoverhuur',
      'tv',
      'huisdieren toegestaan',
    ],
    description: 'Fantastic villa with three bedrooms, located in Málaga.',
  },
  {
    id: 2,
    img: './img/accommodatie_02.jpg',
    title: 'Mediterraans huis met zwembad',
    location: 'Calahonda',
    rating: 4.9,
    price: 97,
    kamers: 4,
    accommodatieType: 'huis',
    faciliteiten: ['wifi', 'zwembad', 'parking'],
    description: 'Super villa with three bedrooms, located in the Calahonda.',
  },
  {
    id: 3,
    img: './img/accommodatie_03.jpg',
    title: 'Marbella centrum kamer 3 personen met zwembad',
    location: 'Marbella',
    rating: 4.8,
    price: 120,
    kamers: 1,
    accommodatieType: 'gedeelde kamer',
    faciliteiten: ['wifi', 'zwembad', 'parking'],
    description:
      'Superb house with two beds, located in the heart of Marbella.',
  },
];

export default accommodatieData;
