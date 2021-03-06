////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(num1, num2, inc = 1 ) {
  let rangeArray = [];
  if(inc < 0 || num1 === num2) {
    return rangeArray;
  }
  if (num1 > num2) {
    for(let i = num2 ; i <= num1; i += inc) {
    rangeArray.push(i);  
    } return rangeArray;
  } 
  if (num2 > num1) {
    for(let i = num1 ; i <= num2; i+= inc) {
      rangeArray.push(i);
    }
  } return rangeArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  const arrSum = array.reduce(function(a, b) {
  return  a + b;
  }, 0);
  return arrSum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let newArr = array.slice().reverse();
  return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  let newArr = array.reverse();
  return newArr;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var array = [];
  for(var node = list; node; node = node.rest){
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list){
  let elementList = {
   	value: element,
   	rest: list
  };
  return elementList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Input: List(object), value
//Output: Second value in our list after our input value

function nth(list, value) {
 for(var node = list; node; node = node.rest) {
     if (value === 0) {
    return node.value;
    } else if (node.rest === null) {
      return undefined;
    } else {
      return nth(list.rest, value - 1);
    }
  }
} 

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(first, second, indentation='') {
    if (typeof first === typeof second) {
        if (typeof first === "object") {
      if (first !== null) {
        firstKeys = Object.keys(first);
        secondKeys = Object.keys(second);
        if (firstKeys.length == secondKeys.length) {
          trackInequalities = [];
          for (let i=0; i<= firstKeys.length-1; i++) {
            trackInequalities.push(deepEqual(first[firstKeys[i]],second[secondKeys[i]], '    '));
          }
          return !trackInequalities.includes(false)
        } else {
          // Different amount of keys
          return false;
        }  
      } else {
        // Both are null
        return true; 
      }
        } else {
            return first === second;
        }
    } else {
        return false;
    }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
