const argv = require('yargs')
  .option('b', {
    alias: 'base',
    demandOption: true,
    description: 'Base de la tabla',
    type: 'number',
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un número. Ej. --base 5';
    }
    return true;
  })
  .option('s', {
    alias: 'show',
    demandOption: true,
    description: 'Mostrar tabla',
    type: 'boolean',
    default: false,
  })
  .option('l', {
    alias: 'limit',
    demandOption: true,
    description: 'Limite de la tabla',
    type: 'number',
    default: 10,
  }).argv;

module.exports = argv;
