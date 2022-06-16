const empleados = [
  {
    id: 1,
    nombre: 'Denis',
  },
  {
    id: 2,
    nombre: 'Linda',
  },
  {
    id: 3,
    nombre: 'Karen',
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },
  {
    id: 3,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  const promesa = new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id).nombre;
    empleado ? resolve(empleado) : reject(`No existe un empleado con el id ${id}`);
  });
  return promesa;
};
const id = 1;
getEmpleado(id).then((empleado) => console.log(empleado));
