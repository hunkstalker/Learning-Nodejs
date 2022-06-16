// import * as fs from 'fs';
const fs = require('fs');

const crearTablaMultiplicar = async (base, s, l) => {
  try {
    let salida = '';
    for (let i = 1; i <= l; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (s) {
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creado`;
  } catch (err) {
    throw err;
  }
};

// export { crearTablaMultiplicar };
module.exports = { crearTablaMultiplicar };
