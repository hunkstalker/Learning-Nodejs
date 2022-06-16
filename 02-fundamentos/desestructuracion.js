const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneración',
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

const { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);
