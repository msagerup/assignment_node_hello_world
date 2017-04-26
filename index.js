
var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');

// test chalk
console.log(chalk.white.bgRed.bold('Error!!'));
console.log(chalk.white.bgGreen.bold('It Works!'));

// test lodash
var myArray = ['Norway', 'Sweden', 'Denmark', 'Finland'];
_.each(myArray, function(land){
    console.log(chalk.green.bold(land));
});


//logger

logger.log('Message from info', 'info');
logger.log('Message from warning', 'warning');
logger.log('Message from Error', 'error');