const products = [
  { name: "apple", price: 10 },
  { name: "banana", price: 5 },
  { name: "apple", price: 12 },
  { name: "orange", price: 8 },
  { name: "banana", price: 7 },
];

const productCounts = products.reduce((counts, items) => {
  counts[items.name] = counts[items.name] ? counts[items.name] + 1 : 1;
  return counts;
}, {});

console.log(productCounts); // { apple: 2, banana: 2, orange: 1 }
