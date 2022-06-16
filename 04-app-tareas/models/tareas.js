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
    this._listado[tarea.id] = tarea;
  }

  crearTarea(descr = '') {
    const tarea = new Tarea(descr);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
