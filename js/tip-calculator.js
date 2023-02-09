// Assign initial values
const billTotal = 40;
let tipRate = .25;
tipRate = Math.round(tipRate * 100) / 100;

const tipPercentage = tipRate * 100 + "%";





// Calculate tip
const tipAmount = billTotal * tipRate;

const paymentTotal = billTotal + tipAmount;



// Output
console.log(tipAmount);

console.log(billTotal, tipRate, tipPercentage, paymentTotal);

