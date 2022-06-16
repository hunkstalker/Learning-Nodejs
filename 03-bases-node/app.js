const { crearTablaMultiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
// import { crearTablaMultiplicar } from './helpers/multiplicar';

console.clear();

// console.log(process.argv);

// console.log(argv);
// console.log(argv.b);

// const [, , argvBase = '--base=0'] = process.argv;
// const [, base = 0] = argvBase.split('=');

crearTablaMultiplicar(argv.b, argv.s, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creada.'))
  .catch((err) => console.log(`${err}`));
