let number=[10,20,30,40,50];

let sum=number.reduce((accumulator,element,ind,array)=>{

console.log('Accumulator:', accumulator, 'Element:', element);

 return accumulator+element;

},0);

console.log(sum);