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
