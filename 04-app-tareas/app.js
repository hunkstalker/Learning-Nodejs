require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

console.clear();
const main = async () => {
  let opt = '';
  const tareas = new Tareas();
  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const descr = await leerInput(`Ingresa una descripción: `);
        tareas.crearTarea(descr);
        break;
      case '2':
        tareas.listadoCompleto();
        break;
      case '3':
l        break;
      case '4':
        tareas.listarCompletadosPendientes(false);
        break;
    }

    guardarDB(tareas.listadoArray);

    if (opt !== '0') await pausa();
  } while (opt !== '0');
};

main();
