var colors = require('colors');

const { createFile } = require("./helpers/multiply");
const {b,m,x,l} = require('./config/yargs')


console.clear();


createFile(b,m,x,l)
    .then(name => console.log(colors.green(`${name} created`)))
    .catch(err => console.error(colors.red.underline(err)));



/* const [ , ,arg3] = process.argv;
console.log(arg3);
const [ , base = 5] = arg3.split('=')

 */
