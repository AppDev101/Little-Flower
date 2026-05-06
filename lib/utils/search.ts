"use server";

const data = [
  { name: "Espresso", price: 3 },
  { name: "Cappuccino", price: 4 },
  { name: "Latte", price: 4.5 },
  { name: "Americano", price: 3.5 },
  { name: "Mocha", price: 5 },
];

async function searchAction(query: string) {
  return data.filter((item) => item.name.toLowerCase().includes(query));
}

async function getInitialData() {
  return data;
}

export { searchAction, getInitialData };
