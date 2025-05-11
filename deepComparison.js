/*
The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual properties.
Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when
compared with a recursive call to deepEqual.
To find out whether values should be compared directly (using the === op- erator for that) or have their properties compared, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep com-parison. But you have to take one silly exception into account: because of a historical accident, typeof null also 
produces "object".
The Object.keys function will be useful when you need to go over the prop- erties of objects to compare them.
*/


function deepComparison(value1, value2){
  //early exit scenarios - if plain values or different types
  const type1 = typeof value1, type2 = typeof value2, type1NotObject = type1 !== 'object', type2NotObject = type1 !== 'object', ;
  if(type1 !== type2 || (type1NotObject && type2NotObject && value1 !== value2)){
    return false;
  }
  else if(value1 === null && value2 === null){
    return true;
  }
  //one is object and one is null - return false
  else if (value1 === null || value2 === null && value1 != value2) {
    return false;
  }  
  //only one possibility - both are objects
  else {
    let i;
    //different length of keys
    if (Object.keys(value1).length !== Object.keys(value2)){
      return false;
    }
    //same number of keys
    for (i in value1) {
      if(!(i in value2)) {
        return false;
      } else {
        let value1 = keysOf1[i], value2 = keysOf2[i];
        return deepComparison(value1, value2)
      }
    }
  }
  
}
