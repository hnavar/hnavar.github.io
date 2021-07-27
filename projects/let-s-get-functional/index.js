// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./hnavar.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return _.filter(array, function(element, index, array){
        return element.gender === "male";
    }).length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(seed, element, index){
        return (element.gender === "female") ? seed += 1 : seed;
    }, 0);
};

var oldestCustomer = function(array){
    var old = array[0];
    _.each(array, function(element, index, array){              
        old = (element.age > old.age) ? element : old;
    });
    return old.name;
};

var youngestCustomer = function(array) {
    var youngObj;                             //seed         //currentObject  //current
    var youngCustomer = _.reduce(array, function(previousReturn, currentElement, currentIndex) {
        if (previousReturn > currentElement.age) {
            previousReturn = currentElement.age;
            youngObj = currentElement;
        }
        return previousReturn;
    }, 1000);
    return youngObj.name;
};

var averageBalance = function(array) {
    let balance = 0;
    let numberOfBalances = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i].balance) {
            numberOfBalances++;
            balance += Number(array[i].balance.replace(/[$,]/g, ''));
        }
    } return balance/numberOfBalances;
};

var firstLetterCount = function(array, letter) {
    let variableLetterCount = 0;
     _.filter(array, function(element) {
        if (element.name[0].toLowerCase() === letter.toLowerCase()) {
            variableLetterCount++;
        }
    }); return variableLetterCount;
};

var friendFirstLetterCount = function(array, customer, letter) {
    //loop over the array
    for (let i = 0; i < array.length; i++) {
        //check to see if the object is the customer
        if(array[i].name === customer) {
            //call the firstLetterCount function on that object's friend array with letter
            return firstLetterCount(array[i].friends, letter);
        }
    }
};


var friendsCount = function(array, name) {
   let customerNames = [];
    for (let i = 0; i < array.length; i++) { 
        _.filter(array[i].friends, function(friendElements) {
       if(friendElements.name === name) {
           customerNames.push(array[i].name);
       }
   });
  } return customerNames;
};

var topThreeTags = function(array) {
   let newArr = [];
    for(let i = 0; i < array.length; i++){
      array[i].tags.filter(function(elements) {
       newArr.push(elements);
      });
    } 
    let obj = newArr.reduce(function(count, currentTag) {
      if(!count[currentTag]) {
        count[currentTag] = 1;
      } else {
        count[currentTag]++;
      } return count; 
    }, {}); let sort = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    let newArray = sort.slice(0, 3);
     return [].concat.apply([], newArray).filter(element => typeof element === "string");
};

var genderCount = function(array) {
return _.reduce(array, function(count, currentPerson) {
if (!count[currentPerson.gender]) {
  count[currentPerson.gender] = 1;
} else {
  count[currentPerson.gender]++;
} return count;
}, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
