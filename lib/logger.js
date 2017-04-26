var chalk = require('chalk');
var logger = {
    levels: ['INFO ', 'WARNING ', 'ERROR '],
    log: function(message, level) {
        switch(level){
            case 'info':
                console.log(chalk.bold.blue(this.levels[0]) + chalk.blue(message));
                break;
            case 'warning':
                console.log(chalk.bold.yellow(this.levels[1]) + chalk.yellow(message));
                break;
            case 'error':
            console.log(chalk.bold.red(this.levels[2]) + chalk.red(message));
                  
        }

    }

};

module.exports = logger;