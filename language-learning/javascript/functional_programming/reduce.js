var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

// Using reduce
var totalAmount = orders.reduce(function (sum, order) {
  console.log('Hello: ', sum, order);
  return sum + order.amount;
}, 0);

// With loop
var totalAmount = 0;

for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}
