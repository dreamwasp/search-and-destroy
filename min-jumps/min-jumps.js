'use strict';

// Complete this algo
const minJumps = (arr) => {
  debugger;
  let count = 1
  let moves = arr[0];
  if (moves >= arr.length-1) return count;
  let smallArr = [];
  for (let i = 0; i < moves; i++) {
    smallArr.push(minJumps(arr.slice(1+i)));
  }
  let smallest = arr.length;
  smallArr.forEach(c => {
    if (c < smallest) smallest = c;
  });
console.log('count+smallest', count+smallest)
  return count + smallest;
};

console.log(minJumps([1, 2, 3, 4]));
// function helper(arr) {}
module.exports = minJumps;
