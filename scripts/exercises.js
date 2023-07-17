//uzd1//
let vārds = "Oksana"
let vecums = 45
let irStudents = true
console.log(vārds, vecums, irStudents);

//uzd2//
let augļi = ["banāns", "kivi", "persiks"];
console.log(augļi);

//uzd3//
let persona = { vārds: "Oksana", vecums: 45, irStudents: true };
console.log(persona);

//funkcija//


function sayGreeting(firstName, day, temperature) {
    console.log(`Hello, ${firstName}! Today is ${day}, ${temperature} degree outside!`);
};
sayGreeting("Liva", "Monday", "23");

//uzd4
function myFunction() {
    let x = 5;
    console.log(x);
}
myFunction();

//uzd5
let y = 10;
function myFunction1() {
    console.log(y);
}
myFunction1();

//uzd6//
//function myFunction2(){
//let z = 100;
//console.log(z);
//}
//myFunction2();
//console.log(z);

//uzd7
let a = 24;
function myFunction3() {
    let a = 24;
    console.log(a);
}
myFunction3();
console.log(a);

//piemērs
let number1 = 5;
let number2 = "5";
console.log(number1 == true);
console.log(number2 === false);

//operātori
let x1 = 100 + 50;
console.log(x1);

let num = 10
num += 5;
console.log(num);


//plūsma
//1.
const numurs = 0;
if (numurs > 0) {
    console.log("Pozitīvs");
} else if (numurs < 0) {
    console.log("Negatīvs");
} else {
    console.log("Nulle");
}

//2.
const skaitlis = 32;
if (skaitlis % 3 == 0 && skaitlis % 5 == 0) {
    console.log("Dalās");
}else {
    console.log("Nedalās");
}

