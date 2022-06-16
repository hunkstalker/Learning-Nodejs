console.log(`Iniciando script...`);
// setTimeout(() => {
//   console.log(`Ejecución del callback`);
// }, 2000);
// console.log('Esperando 2 segundos...');

const getUserId = (id, callback) => {
  const user = {
    id,
    name: 'John Doe',
  };
  setTimeout(() => {
    callback(user);
  }, 2000);
};

getUserId(1, (user) => {
  console.log(user);
});
