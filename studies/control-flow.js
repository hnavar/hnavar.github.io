/* Control flow is the process in which the user inputs code in a way which is ordered for best results
Control flow is extremly powerful and there are two ways to implement it.

There are three distinct parts of control flow. 

The if statement, which is followed by parethesis and some condition you are going to check for.

The else if statement, which follows only after an if statement, but functions similarly as if statement and checks a specific condition.

Finally, the else statement, which should be activated only when all of your other conditions fail

The best way to implement control flow (to me) is to use an If - Else If - Else chain.

*/ 

function typeOf(value) {
  
    if (typeof value === "number") {
        return "number";
    } else if (typeof value === "string") {
        return "string";
    } else if (typeof value === "undefined" ) {
        return "undefined";
    } else if (typeof value === "boolean" ) {
        return "boolean";
    } else if ( value instanceof Date ) {
        return "date";
    } else if (typeof value === "function" ) {
        return "function";
    } else if (value === null ) {
        return "null";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === "object") {
        return "object";
    } else { "Beep booop error!";
        
    }
    
}
    
// As you can see in the example the flows and returns the proper value. If the code was written without control flow being taken into consideration, mass error would occur.

/* The second type of control flow used is switch statements.

Switch statements have a starting case, which is followed after the keyword switch(this is what you are checking)

After each switch statement, one uses the case keyword and checks for multiple different outputs. If one of these outputs resolves to true,
then you will return a specific output for our condition. 

If it resolves to false, then the break keyword is used to move to the next cases.

Switch statements have there uses but the code is more simplistic than else if chains.
Here is an example of a switch statement

*/

var color = "yellow";
var darkOrLight="";
switch(color) {
    case "yellow":case "pink":case "orange":
        darkOrLight = "Light";
        break;
    case "blue":case "purple":case "brown":
        darkOrLight = "Dark";
        break;
    default:
        darkOrLight = "Unknown";
}

// The switch staement is built with switch(argument), with your cases, and a return value . AFter these two parts a break statement and semicolon follow .


// Overall control is very important.