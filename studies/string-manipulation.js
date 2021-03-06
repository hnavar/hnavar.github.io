/* String Manipulation refers to changing a string with built in Javascript methods. Doing this allows for unique elements to be pulled or added to strings.
With string methods data can also be traced from strings and stored into variables or used in other computations
Common string methods include: .slice(), .length, .split(), .toLowercase(). This being said there are many many more. */
 const text = "Here is Some Text";
 var testLength = text.length;
 console.log(testLength);
 // This codes expected output would be to log 17 to the console.
 
 var textSplit = text.split(" ");
 console.log(textSplit);
 // The Split method takes an argument and splits the string into an array with the indexes labeled from that argument.
 
 var textSlice = text.slice(0, 10);
 console.log(textSlice);
 //The Slice method takes two arguments, the stating portion in the string and the stopping portion of the string. It then slices that part of the string out.
 //Returns "Here is so". Notice it doesn't include the 10th index.
 //Important to note slice is a pure function and does not change the origincal value; 
 
const textLowerCase = text.toLowerCase();
console.log(textLowerCase);
// Expected value is here is some text.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
//Important to note this is not pure function!
//This function can be used on strings and arrays

//The final string method that can be useful is .trim, which essentially trims off all blank space on a string 

'    omg  '.trim(); 

// Expected output "omg"



