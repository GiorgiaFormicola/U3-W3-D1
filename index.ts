// EXERCISE 1
/* I tipi primitivi principali in TypeScript sono:
- string 
- number 
- boolean 
- undefined
- null
- any*/

// EXERCISE 2
let myName: string = "Giorgia";
console.log("ES.2_NOME", myName);

let age: number = 28;
console.log("ES.2_ETA'", age);

let studyingTS: boolean = true;
console.log("ES.2_STA STUDIANDO TYPESCRIPT?", studyingTS);

//EXERCISE 3
const greet = (name: string) => {
  return "Ciao " + name;
};
console.log("ES.3", greet("Giorgia"));

//EXERCISE 4
const sum = (a: number, b: number): number => {
  return a + b;
};

console.log("ES.4", sum(5, 6));

// EXERCISE 5
const calculateIVA = function (price: number): number {
  return price + price * 0.22;
};

console.log("ES.5", calculateIVA(10) + " euro");

// EXERCISE 6
const concatenateStrings = function (string1: string, string2: string): number {
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
let mixedVariable: number | null | undefined = 100;
mixedVariable = null;
mixedVariable = undefined;
// mixedVariable = "Ciao" <= ERRORE

// oppure potremmo usare un Type Alias
type CustomType = number | null | undefined;
let mixedVariable2: CustomType = 100;
mixedVariable2 = null;
mixedVariable2 = undefined;
// mixedVariable2 = "Ciao" <= ERRORE

// EXERCISE 9
type weekDays = "lunedì" | "martedì" | "mercoledì" | "giovedì" | "venerdì" | "sabato" | "domenica";
let day: weekDays = "lunedì";
day = "martedì";
day = "mercoledì";
day = "giovedì";
day = "venerdì";
day = "sabato";
day = "domenica";
// day = "ciao" <= ERRORE

// EXERCISE 10
const numbers: number[] = [1, 2, 3];
/* oppure
const numbers : Array<number> = [1, 2, 3]; */

// EXERCISE 11
let tuple: [string, string, string, number, number] = ["gatto", "cane", "topo", 10, -1];

// EXERCISE 12
/* Un Interface ci consente di creare la struttura di un oggetto in maniera molto specifica
 definendone sia le proprietà, sia di che tipo queste proprietà debbano essere. Un Type invece è un tipo "custom"
 creato dall'unione di tipi primitivi.
  */

// EXERCISE 13
interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

const Giorgia: Person = {
  firstname: "Giorgia",
  lastname: "Formicola",
  age: 28, // se age: "28" <= ERRORE
};

// EXERCISE 14
interface User {
  email: string;
  phone?: number;
}

const user1: User = {
  email: "tizio@gmail.com",
};

const user2: User = {
  email: "tizio@gmail.com",
  phone: 3330138643,
};

/* const user3: User = { <= ERRORE
  phone: 3330138643,
}; */

// EXERCISE 15
interface Student {
  name: string;
  grade: number;
}

const studentsArray: Student[] = [
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

// EXERCISE 16
interface Vehicle {
  name: string;
  hasWheels: boolean;
}

interface Auto extends Vehicle {
  brand: string;
}

//EXERCISE 17

const auto1: Auto = {
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

//EXERCISE 20
interface APIResponse<A> {
  success: boolean;
  data: A;
}
