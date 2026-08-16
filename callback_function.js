function result(a,b,cb){
    let sum=a + b;
    cb(sum);
}

function addition(answer){
    console.log(answer);

}

result(45,10,addition);