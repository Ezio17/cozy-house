export const navigation = [
  {
   name: 'About the shelter',
   navLink: true,
   to: '/',
  },
  {
   name: 'Our pets',
   navLink: true,
   to: '/pets'
  },
  {
   name: 'To help the shelter',
   navLink: false,
   to: 'shelter'
  },
  {
   name: 'Contacts',
   navLink: false,
   to: 'contacts'
  },
]

export const help = [
  {
    name: 'Pet food',
    img: 'cat-food.png',
  },
  {
    name: 'Transportation',
    img: 'ambulance.png',
  },
  {
    name: 'Toys',
    img: 'ball.png',
  },
  {
    name: 'Bowls and cups',
    img: 'bowl.png',
  },
  {
    name: 'Shampoos',
    img: 'shampoo.png',
  },
  {
    name: 'Vitamins',
    img: 'pills.png',
  },
  {
    name: 'Medicines',
    img: 'syringe.png',
  },
  {
    name: 'Collars / leashes',
    img: 'leash.png',
  },
  {
    name: 'Sleeping area',
    img: 'cat.png',
  }
]

export let pets = [
  {
    name:'Katrine',
    img: 'Katrine.png'
  },
  {
    name: 'Jennifer',
    img: 'Jennifer.png'
  },
  {
    name: 'Woody',
    img: 'Woody.png'
  },
  {
    name: 'Sophia',
    img: 'Sophia.png'
  },
  {
    name: 'Timmy',
    img: 'Timmy.png'
  },
  {
    name: 'Charly',
    img: 'Charly.png'
  },
  {
    name: 'Scarlett',
    img: 'Scarlett.png'
  },
  {
    name: 'Freddie',
    img: 'Freddie.png'
  }
]

export let paginationNumbers = [
  {
  number: 1,
  isActive: true,
  isNumber: true,
 },
 {
  number: 2,
  isActive: false,
  isNumber: true,
 },
 {
  number: 3,
  isActive: false,
  isNumber: true,
 },
 {
  number: '...',
  isActive: false,
  isNumber: false,
 },
 { 
  number: 10,
  isActive: false,
  isNumber: true,
 },
];

export let slider = pets.sort(() => Math.random() - 0.5).slice(0, 5); 
