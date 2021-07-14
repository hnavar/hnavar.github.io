/* Loops
Loops in Javascript are a way to automate and do quick repetive things multiple times. This ability makes loops extremly powerful and needed.
*/

//There are many different kinds of loops, we will be going in order from most common types of loops to lesser common types.

/* The typical for loop is the most common loop we'll use in JavaScript and consist of the for keyword with three seperate parts seperated by semi-colons.
The first part is the variable declaration, the second part is the condition set, and the third part is the iterator.
*/ 

//Typical for loop

function forLoop (stringOrArray) {
    for (var i = 0; i < stringOrArray.length; i++ ) {
        console.log(i);
    }
}

forLoop("Test");

//The next most common loop might be the for - in loop, which allows someone to loop through an object, the sytax looks like this

function forInLoop (obj) {
    for (var key in obj) {
        console.log(obj[key]);
    } 
}

// The next type loops you can do is a while loop. A while loop is easy enough to make with the while keyword, a condition in paretheses an an action to perform after 

/* while (condiion) {
    Do Something
} */
