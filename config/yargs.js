const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Base of multiplication table\n'
                })
                .option('l', {
                    alias: 'list',
                    demandOption: false,
                    default: false,
                    type: 'boolean',
                    describe: 'Print table on the console\n'
                })
                .option('m', {
                    alias: 'minimum',
                    type: 'number',
                    default: 1,
                    demandOption: false,
                    describe:'Table start with this number'
                })
                .option('x', {
                    alias: 'maximum',
                    type: 'number',
                    default: 10,
                    demandOption: false,
                    describe:'Table end with this number'
                })
                .check(({b,l,min,max},options) => {
                    if((typeof(b || min || max) !== 'number') || (typeof(l) !== 'boolean')){
                        throw 'A value of type number was expected'
                    }else{
                        return true
                    }
                })
                .argv

module.exports = argv;
