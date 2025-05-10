//slice is used to create a subset of the array - a new copy. slice(x,y) -> both are 0 based. x is inclusive and y is exclusive
//concat is used to append 2 arrays to create a new array.
// useing slice and concat - create a function which can remove an element at a given location

//removeAt([1,2,3,4,5], 3) -> [1,2,3,5]

function removeAt(array, indexToRemove) {
   const arr1 = array.slice(0, indexToRemove)
   const arr2 = array.slice(indexToRemove, array.length);
   reutrn arr1.concat(arr2);
}
