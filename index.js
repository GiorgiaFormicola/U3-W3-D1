// EXERCISE 1
/* I tipi primitivi principali in TypeScript sono:
- string
- number
- boolean
- undefined
- null
- any*/
// EXERCISE 2
var myName = "Giorgia";
console.log("ES.2_NOME", myName);
var age = 28;
console.log("ES.2_ETA'", age);
var studyingTS = true;
console.log("ES.2_STA STUDIANDO TYPESCRIPT?", studyingTS);
//EXERCISE 3
var greet = function (name) {
    return "Ciao " + name;
};
console.log("ES.3", greet("Giorgia"));
//EXERCISE 4
var sum = function (a, b) {
    return a + b;
};
console.log("ES.4", sum(5, 6));
// EXERCISE 5
var calculateIVA = function (price) {
    return price + price * 0.22;
};
console.log("ES.5", calculateIVA(10) + " euro");
// EXERCISE 6
var concatenateStrings = function (string1, string2) {
    return (string1 + string2).length;
};
console.log("ES.6", concatenateStrings("Ciao", "Giorgia"));
// EXERCISE 7
/* Un Type Union sostanzialmente è l'unione di più "insiemi" di tipi di dato.
Significa quindi definire un tipo che sia l'unione dei tipi presi in considerazione.
Si scrive in questo modo:
"tipo1 | tipo2" => es. let mixedType : string | number = 100
 */
// EXERCISE 8
var mixedVariable = 100;
mixedVariable = null;
mixedVariable = undefined;
var mixedVariable2 = 100;
mixedVariable2 = null;
mixedVariable2 = undefined;
var day = "lunedì";
day = "martedì";
day = "mercoledì";
day = "giovedì";
day = "venerdì";
day = "sabato";
day = "domenica";
// day = "ciao" <= ERRORE
// EXERCISE 10
var numbers = [1, 2, 3];
/* oppure
const numbers : Array<number> = [1, 2, 3]; */
// EXERCISE 11
var tuple = ["gatto", "cane", "topo", 10, -1];
var Giorgia = {
    firstname: "Giorgia",
    lastname: "Formicola",
    age: 28, // se age: "28" <= ERRORE
};
var user1 = {
    email: "tizio@gmail.com",
};
var user2 = {
    email: "tizio@gmail.com",
    phone: 3330138643,
};
var studentsArray = [
    { name: "Marco", grade: 8 },
    {
        name: "Luca",
        grade: 6,
    },
    {
        name: "Laura",
        grade: 10,
    },
];
//EXERCISE 17
var auto1 = {
    name: "car",
    hasWheels: true,
    brand: "Fiat",
};
//EXERCISE 18
/* I Generics TypeScript sono dei "parametri di tipo" che ci permettono di definire
funzioni, classi o interfacce con dei tipi ancora non definiti e che verrano poi specificati
nel momento in cui quese vengono utilizzate/invocate*/
//EXERCISE 19
/* Sì, un'interfaccia può contenere più tipi generici*/
