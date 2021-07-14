const fs = require("fs");
var colors = require('colors');
console.clear();

const createFile = async (base = 5, min = 1,max = 10, list) => {
  try {
    let salida = "";
    let name = `table-of-${base}.txt`;

    for (let i = min; i <= max; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if(list) console.log(salida);
    

    fs.writeFileSync(name, salida);
    console.log(colors.rainbow(` "${name}" file created successfully `));

    return name;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
