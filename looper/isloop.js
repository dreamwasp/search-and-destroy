'use strict';

//Complete this algo
const isLoop = linkedlist => {
  const arr = [];
  let link = linkedlist.head;
  while (link.next) {
    if (arr.includes(link.value)) return link.value;
    else arr.push(link.value);
    link = link.next
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
