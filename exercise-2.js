/////////////////////// MAP ///////////////////
/*

Este método crea un nuevo array con los resultados de aplicar 
una función a cada uno de los elementos del array original. 
Es una herramienta muy poderosa para transformar datos 
de manera funcional y concisa.
Sintaxis:
arr.map(function callback(currentValue, index, array)
*/
 ///////////////forma extendida////////////////////////////
const duplicarEdad = ( currentValue, index, array )=>{
    return currentValue * 2;
}
const ages = [1, 2, 4, 10, 15] ;
const dobleAges = ages.map(  duplicarEdad );
console.log(dobleAges)

//////////////////////sintetizada/////////////////////////

let simpleArray = [4, 8, 12, 24, 32];
//const doubleArray = simpleArray.map((x)=> x*2);
const doubleArray = simpleArray.map((edad)=> edad*2);
console.log(doubleArray);

///////////////// Ciclo for ////////////////////////

// [1, 2, 4, 10, 15] 
const duplicarValor = ( array ) => {
    const newArray = [];
    for(let i= 0; i<array.length; i++ ){
      newArray.push( array[i] * 2 );
    }
    return newArray;
 };
 const myArray = [1, 2, 4, 10, 15] ;
 console.log(  duplicarValor( myArray )   ); // [2, 4, 8, 20, 30]






