function superShop(){
    let cash=0;

    return function(payment){

        cash+=payment
        return cash;
    }
}


let dashboard=superShop();
let dispaly=superShop();


console.log(dashboard(233));
console.log('After The Payment Now and new add Payment :');
console.log(dashboard(43));
console.log('-----------');
console.log(dispaly(344));
