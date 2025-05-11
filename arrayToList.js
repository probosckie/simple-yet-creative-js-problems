//Write a function arrayToList that builds up a list structure. (like a linked list)
//Also write a listToArray function that produces an array from a list. Add the helper functions prepend, 
//which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns 
//the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
/*
[1,2,3]
{
  value:1,
  rest: {
    value:2,
    rest: {
      value: 3,
      rest: null
    }
  } 
}
*/
function arrayToList(array) {
  let i, prevSeed = {value: array[array.length - 1], rest: null}, result;
  
  for(i = array.length - 2; i >= 0; i--) {
    result = {};
    result.value = array[i];
    result.rest = prevSeed;
    prevSeed = result;
  }
 return result;
}

function listToArray(list) {
  const array = [];
  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}



