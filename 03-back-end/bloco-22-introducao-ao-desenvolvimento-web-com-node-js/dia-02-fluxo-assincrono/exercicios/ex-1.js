const funcPromise = (num1, num2, num3) => new Promise((resolve, reject) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
    reject(new Error('Informe apenas números'));
  }

  const calc = (num1 + num2) * num3;

  if(calc <= 50) reject(new Error('Valor abaixo de 50'));

  resolve(calc);
});

async function main() {
  try{
    const teste = await funcPromise(10, 20, 2);
    console.log(teste);
  } catch(err) {
    console.error(err.message);
  }
}

main();