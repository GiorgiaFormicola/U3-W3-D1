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
