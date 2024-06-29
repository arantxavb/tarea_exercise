// Write a program to compute the sum and product (multiplication) of an array of numbers. 
//Print out the sum and the product.
// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
//


/////////////////// CICLO FOR ////////////////////////

let numbers = [5, 10, 14, 8];
let suma= 0
let multi = 1


for(let i=0; i<numbers.length; i++){
    
    suma= suma + numbers[i]
    multi= multi* numbers[i]
}

console.log("la suma es " + suma)
console.log("el producto es " + multi)
