//let age = 20;
//let canDrive = false;

//if (age . 18) {
//   canDrive = true;
//} else {
canDrive = false;
//}
//
//canDrive = age > 18

//let greeting = timeHours > 12 ? "good afternoon"



//uzd3
let x = 23;
let y = 22;
if (x > y) {
    console.log("x ir lielāks par y");
} else {
    console.log("x nav lielāks par y");
}

//uzd4
//function dienas(diena) 
//switch (diena()) {
// case 1:
//   day = "Pirmdiena";
//   break;
// case 2:
//   day = "Otrdiena";
//   break;
// case 3:
//   day = "Trešdiena";
//   break;
// case 4:
//   day = "Ceturdiena";
//   break;
// case 5:
//    day = "Piekdiena";
//   break;
// case 6:
//   day = "Sestdiena";
//   break;
//  case 7:
//    day = "Svētdiena";
//}


const fruits = ["orange", "apple", "lemon", "tomatoe"]
for (let i = 0; i < fruits.length; i++) {
    //     console.log(i);
    //     console.log(fruits[i]);
}

/*let i = 0;
    do{
        i==;
        console.log
    }*/


//uzd5
/*for (let i2 = 1; i2 <= 20; i2++){
   if (i2 % == 0){
       console.log(i2);
   }
}*/

//piemēri
let l = 0;
while (l < 6) {
    l++;
    console.log(l);
}

/*for (let i = 1; i<10; i++)
if(i == 8)
{
    continue
}*/

//uzd6
let skaitītājs = 0;
let text = "";
while (skaitītājs < 5) {
    skaitītājs++;
    text += "Sveiki ";
    console.log(text)
}

//Funkcijas

//1.
function greeting() {
    console.log("Sveiki, " + "Jānis" + "!");
}
greeting();

//2.
function calculateArea(garums, platums) {
    console.log("Laukums ir " + garums * platums);
}
calculateArea(10, 11);

//3.
function isOdd(skaitlis) {
    if (skaitlis % 2 == 0) {
        console.log("Ir pāra skaitlis");
    } else {
        console.log("Ir nepāra skaitlis");
    }
}
isOdd(25);

//4.
function calculateSum([n1, n2, n3]) {
    console.log(n1 + n2 + n3);
}
calculateSum([11, 22, 33]);

//5.
function checkName(vārds1, vārds2) {
    if (vārds1 === vārds2) {
        console.log("Sakrīt!!!");
    } else {
        console.log("Nesakrīt!!!")
    }
}
checkName("saule", "mēness");

//6.
function checkName1(saraksts, vārds) {
    return saraksts.includes(vārds);
}
const saraksts = ["darbs", "māja", "skola", "parks"];
const vārds = "darbs";
console.log(checkName1(saraksts, vārds));