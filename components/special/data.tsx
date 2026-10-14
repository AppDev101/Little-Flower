export type SpecialData = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export const specialCoffeeData: SpecialData[] = [
  {
    id: 1,
    name: "Americano",
    description: "A delicious and refreshing coffee drink.",
    price: 245.0,
    image: "/americano.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "A rich and creamy coffee drink with steamed milk.",
    price: 265.0,
    image: "/cappuccino.jpg",
  },
  {
    id: 3,
    name: "Latte",
    description: "A smooth and velvety coffee drink with lots of milk.",
    price: 285.0,
    image: "/latte.jpg",
  },
  {
    id: 4,
    name: "Espresso",
    description: "A strong and bold coffee drink with a rich flavor.",
    price: 225.0,
    image: "/espresso.jpg",
  },
  {
    id: 5,
    name: "Mocha",
    description: "A sweet and chocolatey coffee drink with a hint of espresso.",
    price: 295.0,
    image: "/mocha.jpg",
  },
];

export const specialDessertData: SpecialData[] = [
  {
    id: 1,
    name: "Chocolate Cake",
    description: "A rich and decadent chocolate cake.",
    price: 150.0,
    image: "/chocolate-cake.jpg",
  },
  {
    id: 2,
    name: "Cheesecake",
    description: "A creamy and tangy cheesecake.",
    price: 180.0,
    image: "/cheesecake.jpg",
  },
  {
    id: 3,
    name: "Tiramisu",
    description: "A classic Italian dessert with coffee and mascarpone.",
    price: 200.0,
    image: "/tiramisu.jpg",
  },
  {
    id: 4,
    name: "Brownie",
    description: "A rich and fudgy chocolate brownie.",
    price: 120.0,
    image: "/brownie.jpg",
  },
  {
    id: 5,
    name: "Banana Cake",
    description: "A moist and flavorful banana cake.",
    price: 130.0,
    image: "/banana-cake.jpg",
  },
];
