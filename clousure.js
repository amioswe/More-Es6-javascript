function cashRegister(){

let counter=0;
 return function(paybleAccount){

    counter+=paybleAccount;
    return counter;

 };
}


let fullPayment=cashRegister();
let resturentPyament=cashRegister();
console.log(fullPayment(200));

console.log(fullPayment(700));

console.log(resturentPyament(400));