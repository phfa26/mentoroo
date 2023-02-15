function reverseString(str) {
  let stringSplit = str.split("");
  let reverseArr = stringSplit.reverse();
  let joinArr = reverseArr.join("");
  return joinArr;
}
console.log(reverseString("Eusouolucas"));
//Well done! Pro tip: do not use 'let' if you are not mutating that value at a later stage. Try 'const' instead.
//Also, further down the track consider chaining. You can use array methods in a chain, like: 

//function reverseString(str) {
//  const joinArr = str.split("").reverse().join("");
//  return joinArr;
//}
