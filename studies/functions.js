/*Functions
Functions are reusable blocks of code that can take 0 to any number of parameters and return an output.

When the function is created the values within the () are known as parameters.

Once real values are passed in they are known as arguments. 

Functions also have unique scope called function scope which makes variables only accesible from within the function.

A function can be created in many ways, but the primary way to make a reusable, hoisted function 
is to use the function keyword, with the function name and a set of paretheses and bracket.

Here is common notation for a function declaration.

function thisfunction() {
    
} */

// Here is 5 API functions within the function makeContactList. So six functions in total.

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
            return contacts;
        },
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++) {
               if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast)  { return contacts[i];
                 } else {
                     return undefined;
                 }  
               }
        },
        removeContact: function(contact) {
             for (var i = 0; i < contacts.length; i++) {
                 if (contacts[i] === contact) {
                     contacts.splice(i, 1);
                 }
             }
                 
        }, printAllContactNames: function() {
            var returnedNames = " ";
            for (var i = 0; i < contacts.length; i++)  {
                 returnedNames +=  "\n" + contacts[i].nameFirst + " " + contacts[i].nameLast;  
                 } return returnedNames.trim();
            }
            
        };
            
            
    }
    
    
    //To call the function we use the functiion name plus parentheses.
    
    makeContactList();
    
    
    /* There are also arrow functions and function expressions which are not fully hoisted.
    
    While the function is techincally hoisted, the values within a function expression are not, making it not useable if you try to call the function above the expression.
    
    This is how you create a function expression 
    
    A let, const, or var keyword follower by a name, an equal sign and the function keyword. You also enter any parameters you have
    at this point and your code block.
    */
    
    var functionExpression = function() {
        return "Hi I am a function expression";
        
    };
    
    functionExpression();
        
