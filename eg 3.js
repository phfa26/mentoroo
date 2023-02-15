let fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
];

const found = fibonacci.find(function (element) {
  return element;
});
console.log(found);

//Ok, we can make it harder further down the track

//TIP: Do not overcomplicate stuff, array.find() is not meant to be used this way. ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
