let arr = ["a", "b", "c", "d", "e"];
arr.slice(2);
// negative parameter begins from the end of the array
// -1 is always the last element of an array
arr.slice(-1);
//splice mutates the original array
arr.splice(2);
// removes the last element in an array
arr.splice(-1);
arr.splice(1, 2);
const arr2 = ["j", "m", "f", "g", "h"];
//reverse method mutates
arr2.reverse();
//concat does not mutate
const letters = arr.concat(arr2);
//join method
letters.join(" - ");
// The AT method

const arr3 = [23, 11, 64];
arr3[0];

arr3.at(0);
arr[arr.length - 1];

arr3.slice(-1);
arr3.at(-1);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// forEach method on arrays
movements.forEach(function (mov, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
//forEach on maps and sets

const currencies = new Map([
  ["USD", "Unite States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound Sterling"],
]);

currencies.forEach(function (val, key, map) {});
//ForEach with a set
const currenciesUnique = new Set(["USD", "GBP", "EUR", "EUR"]);
