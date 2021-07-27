/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the three different keywords; var, let, or const; followed by a name (id or alias) for our
 * variable.
 *
 * The var keyword is the most typical keyword and allows you to store values in variables that can be re-assigned whenever.
 * Var was the first keyword created, let and const were created for the issues ha var brought.
 *
 * The const keyword is far less forgiving, once you assign a value using const that value is permanetly assigned to that variable and cannot be re-assigned.
 *
 * The let keyword is the most reassignable keyword and in general should be used within function as it only has block scope. If let is used within a function it will not work outside of that code specific code block.
 *
 * Var declarations are globally scoped or function scoped while let and const are block scoped.
 * They are all hoisted to the top of their scope. But while var variables are initialized with undefined, 
 * let and const variables are not initialized.
 
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. Declaration is when you give a variable a name but do not initalize it yet by assigning a value. The variable will show as undefined. 
//IF we know we want our variable to change, let is the right keyword to use as it is reassignable.

let myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. Initlization is when you assign an already declared variable a value. The new value will be stored in the declrared variable.
myName = 'john';
console.log(myName); // prints => john

/* 3. Re-assignment is when you chnage the value of an arleady made variable but using the assignment opperator. Becuase of how JavaScript memory works unless you 
use the CONST keyword any variable re assigned to a new value will be changed */

myName = "Jandon"
myName = 'bob';
console.log(myName); // prints => bob because Javascript memory is read top from bottom and sees bob stored last

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
const myVariable = 1;
 myVariable = true;
myVariable = "someString";

//Notice when we try to reassign a const variable we get an error! This is because const cannot be reassigned.

/* Hoisting is JavaScript's default behavior of moving 
all declarations to the top of the current scope (script or function).
This allows for variables created anywhere on the script to be used regardless of location */