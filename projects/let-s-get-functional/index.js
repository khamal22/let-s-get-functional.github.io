// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

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
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function (array) {
    let males = _.filter(array, function (customer) {
        return customer.gender === 'male'
    });
    return males.length
};

var femaleCount = function (array) {
    let females = _.reduce(array, function (accumulator, current) {
        if (current.gender === 'female') {
            accumulator += 1
        }
        return accumulator;
    }, 0)
    return females;
};



var oldestCustomer = function (array) {
    //                                   first obj
    let oldestCusto = _.reduce(array, function (accumulator, current) {
        if (accumulator.age < current.age) {
            accumulator = current
        }
        return accumulator
    })
    return oldestCusto.name
};

var youngestCustomer = function(array){
    let youngestCusto = _.reduce(array, function (accumulator, current) {
        if (accumulator.age > current.age) {
            accumulator = current
        }
        return accumulator
    })
    return youngestCusto.name
};

var averageBalance = function(array){
    //                                 previous   talks to array
    let avg = _.reduce(array, function(accumulator, current){
            accumulator += parseFloat(current.balance.replaceAll('$', '').replaceAll(',', ''))
            return accumulator
    },0)
    return(avg / array.length);
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

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
