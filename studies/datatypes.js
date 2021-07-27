/*
 * Datatypes:
 *
 * In JavaScript there are 7 different datatypes commonly used.
 *
 * The five "primitive" datatypes are strings, booleans, numbers, undefined, and null.
 * These datatypes are unable to store other chunks of data but rather are the fundamentals of all data we use.
 */
 
 var myNmae = "Hunt";
 // An example of a string datatype 
 
 var myAge = 22;
 // An example of a number datatype
 
 var myTruthiness = true;
 // An example of a boolean datatype 
 
 var myDog = null; 
 // An example of a null datatype 

 var hairColor;
 // Because this variable is only declared but not initalized, console loggging this would return undefined!
 
 var index0 = 0;
 var index1 = 1;
 var index2 = 2;
 
   
/* Besides the 5 "primitive" datatypes, there are two other "complex" datatypes that are extremly important.
   Our two complex datatypes are arrays and pbjects */
   
/* Our first complex datatype is arrays. Arrays are dfined as complex because they can store multiple different types of data.
   Arrays are ordered by index and can be made using [] and one of our declaration keywords. The sytax to create an array is as follows. */

  var anArray = [index0, index1, index2];
  
  //To access a value within an Array, the best way is to use bracket notation.
  
  let firstElement = anArray[0];
  //expected output index0
  
/* Our second complex datatype is objects. Objects similar to arrays are deined as complex because they can store multiple different types of data.
   Unlike arrays, objects are not ordered by index, but rather are configured by key value pair. Both arrays and objects have their pros and cons when storing data,
   but most people are agree data in objects is slightly more organized. The sytaxz to create an object is one of our keywords followed by {}. */
   
  var myObject = {key: 23};
  
  //To access a key you need to use:
  Object.keys(myObject); //Gives all keys.
  
  //To access the value you simply use dot or bracket notation after the object name
  let objectKey = myObject.key; //Expected outcome 23
  
  // Nan or Not a Number is returned when you try to do an operation on something that only takes in a number as the argument 
  console.log(parseInt('something'));			// returns -> NaN
  
  
 /* Other interesting parts of JavaSCript include infinity and negative infinity.
    In Javascript, the keyword Infinity and -Infiniity represent the largest and smallest mathematical values possible. */
    
   if (Infinity > 10000000000000000000000000) {
    return true;
   }
    
   // returns -> true
 
 /* Finally, The terms “pass by value” and “pass by reference” are used to describe how variables are passed on. To make it short: pass by value means the actual value is 
    passed on. Pass by reference means a number (called an address) is passed on and not stored directly. */   
    
    function add(c, d, output) {
    output.out = c + d;
    }

   var output = {};
   (7, 4, output);
   console.log(output.out);
   
   // Pass by referance example 
