
var chalk = require('chalk');
var lodash = require('lodash');


console.log(chalk.white.bgRed.bold('Error!!'));
console.log(chalk.white.bgGreen.bold('It Works!'));

var myArray = ['Norway', 'Sweden', 'Denmark', 'Finland'];
lodash.each(myArray, function(land){
    console.log(chalk.green.bold(land));
});