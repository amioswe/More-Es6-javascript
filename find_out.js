let phones=[
    {
    mobile:'iPhone',
    price:100000
},
    {
    mobile:'Samsung Galaxy',
    price:80000
},

   {
    mobile:'vivo',
    price:70000
},
   {
    mobile:'Xioami',
    price:60000
},
   {
    mobile:'One Plus',
    price:40000
},
   {
    mobile:'Techno',
    price:20000
},

]

let phonepricelist=phones.filter((phone)=>phone.price>=50000);
let phonepricelist2=phones.find((phone)=>phone.price<=50000);
console.log(phonepricelist);
console.log(phonepricelist2);
