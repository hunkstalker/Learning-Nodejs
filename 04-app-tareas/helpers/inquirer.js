const inquirer = require('inquirer');
require('colors');

const inquirerMenu = async () => {
  console.log(`================================`.green);
  console.log(`     Selecciona una opción`.green);
  console.log(`================================\n`.green);

  const questions = [
    {
      type: 'list',
      name: 'question',
      message: '¿Qué quieres hacer?',
      choices: [
        {
          value: '1',
          name: `${'1.'.green} Crear tarea`,
        },
        {
          value: '2',
          name: `${'2.'.green} Lista de tareas`,
        },
        {
          value: '3',
          name: `${'3.'.green} Lista de tareas completadas`,
        },
        {
          value: '4',
          name: `${'4.'.green} Lista de tareas pendientes`,
        },
        {
          value: '5',
          name: `${'5.'.green} Completar tarea(s)`,
        },
        {
          value: '6',
          name: `${'6.'.green} Borrar tarea`,
        },
        {
          value: '0',
          name: `${'0.'.green} Salir`,
        },
      ],
    },
  ];

  const { question } = await inquirer.prompt(questions);
  return question;
};

const pausa = async () => {
  const message = [
    {
      type: 'input',
      name: 'message',
      message: `Presiona ${'ENTER'.green} para continuar`,
    },
  ];
  console.log(`\n`);
  await inquirer.prompt(message);
};

const leerInput = async (message) => {
  const question = {
    type: 'input',
    name: 'descr',
    message,
    validate(value) {
      if (value.length === 0) {
        return `Por favor ingresa un valor`;
      }
      return true;
    },
  };

  const { descr } = await inquirer.prompt(question);
  return descr;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
