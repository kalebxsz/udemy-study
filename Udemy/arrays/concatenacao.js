// PARA CONCATENAR ARRAYS, OU SEJA, UNIR VALORES DE DIFERENTES ARRAYS, UTILIZAMOS O METODO concat()  ou ...REST



const num1 = [1, 2, 3];
const num2 = [4, 5, 6]; 
// const a3 = num1.concat(num2, [7, 8, 9], 'Kalbe');    /.concat()
const a3 = [...num1, ...num2];  // Spread operator
console.log(a3);

