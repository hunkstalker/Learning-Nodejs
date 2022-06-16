function sumar(a, b) {
  return a + b;
}
console.log(`Suma: ${sumar(1, 2)}`);

const restar = (a, b) => a - b;
console.log(`Resta: ${restar(1, 2)}`);

// Función autoejecutable
((a = 5, b = 4) => console.log(`Multiplicación: ${a * b}`))();

let a = 6;
let b = 3;
// Esto así no funciona
((a, b) => console.log(`División: ${a / b}`))();
