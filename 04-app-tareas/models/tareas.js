const Tarea = require('./tarea');

class Tareas {
  _listado = {};

  get listadoArray() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(descr = '') {
    const tarea = new Tarea(descr);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    this.listadoArray.forEach((tarea, i) => {
      const index = `${i + 1}`.green;
      const { descripcion, completadoEn } = tarea;
      const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;

      console.log(`${index}. ${descripcion} :: ${estado}`);
    });
  }

  listarCompletadosPendientes(completadas = true) {
    console.log();
    let index = 0;
    this.listadoArray.forEach((tarea) => {
      const { descripcion, completadoEn } = tarea;
      const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;
      if (completadas) {
        index++;
        if (completadoEn) console.log(`${index.toString().green}. ${descripcion} :: ${estado}`);
      } else {
        index++;
        if (!completadoEn) console.log(`${index.toString().green}. ${descripcion} :: ${estado}`);
      }
    });
  }
}

module.exports = Tareas;
