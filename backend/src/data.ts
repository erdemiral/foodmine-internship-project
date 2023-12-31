export const sample_foods: any[]=[
    {
        id: '1',
        name: 'Pizza Pepperoni',
        cookTime: '20-30',
        price: 100,
        favorite: true,
        origins: ['italy'],
        stars: 4.6,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: '2',
        name: 'Meatball',
        price: 130,
        cookTime: '35-45',
        favorite: true,
        origins: ['middle east', 'china'],
        stars: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: '3',
        name: 'Hamburger',
        price: 90,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 4.1,
        imageUrl: '/assets/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: '4',
        name: 'Fried Potatoes',
        price: 40,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.6,
        imageUrl: '/assets/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: '5',
        name: 'Chicken Soup',
        price: 30,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.4,
        imageUrl: '/assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: '6',
        name: 'Vegetables Pizza',
        price: 80,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 3.9,
        imageUrl: '/assets/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
]

export const sample_tags:any[]=[
  {name: 'All', count:6},
  {name: 'FastFood', count:4},
  {name: 'Pizza', count:2},
  {name: 'Lunch', count:3},
  {name: 'SlowFood', count:2},
  {name: 'Hamburger', count:1},
  {name: 'Fry', count:1},
  {name: 'Soup', count:1},
]

export const sample_users: any[] = [
  {
    
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    
    name: "Jane Doe",
    email: "jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];