var  Operators = "FUN";

/* Assignment operators
Assignment operators are used to assigne value to a variable. The left side operand of the assignment operator is a variable and right side operand of the assignment operator is a value.
Common assignemnt operators include: =, +=, -=, *=
*/

var assignmentOp = 5;
// Assigns the value of 5 to the variable assignmentOp.

assignmentOp += 5;

// Shorthandd notation for assignmentOp = assignmentOp + 5. 
// AssignmentOp now equals 10;

/* Arithmetic operators
Arithmetic operators are used to perform a mathematical function on variables. 
The common arithmetic operators are +, -, /, and *. Each of these perform addition, subtraction, division, or multiplication. 
*/

var arithmeticOp = assignmentOp + 10;
// Value yielded is 20;

arithmeticOp = arithmeticOp * 5;
// Value yieled is 100;

/* Comparison operators
Comparison are operators that are used to compare to different values or variables and return either true or false.
Common comparison operators include <, >, <=, >=, ===, ==
*/ 

5 >= 4, 8 < 100, 

// --> both return true 

// Important note that == is loose comparison while === is strict comparsion, meaning that the datatype matters as well.


/* Logical operators
Logical operators are used to determine or compare between different values and variables.
The three logical operators commmonly used are &&, ||, and the ! (bang operator).
*/ 

// The && operator allows for two cojoining parameters to be set so that specific functions can be created.
// (10 > 5 && 12 > 10) 
// Can be impliminted in an if statement. The && will make sure both statements are evaluated to true or false will be returned.

// The || is the "or" logical operators. It checks between two or more different statements, if either are true it will return the value true.
//(10 > 5 || 6 > 7)
// While this looks peculiar this would return true between the two because the || operator is just checking if one is true.

/* Unary oppertors 
Unary opperators are slightly less known opperators oppertors until you get to loops. 
+a // Converts to number
-a // Converts to number and negates
++a // Adds 1 to a and returns new a
a++ // Adds 1 to a and returns original a
--a // Subtracts 1 from a and returns new a
a-- // Subtracts 1 from a and returns original a
These are the most common ones*/
/*
for (var i = 0; i < 5; i++) {
    //Uses the unary opperator to increase i by one each itteration 
    return console.log(i);
} */

// the typeOf opperator returns the datatype of a specific primitive data type
// var typeString = typeof("string");

//returns value of string 

/* Ternary opperator
The ternary opperator aka (conditional) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), 
then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.

It is set up like this (condition) ? (if true, do this) : (otherwise, do this) */

(5 < 10) ? (console.log(true)) : (false);

// Expected Value true