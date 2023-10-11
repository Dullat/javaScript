// arrow functions

let sum = (a, b) => a + b;
console.log(sum(3,5));

let sum2 = n => n * 2;
console.log(sum2(3));

let age = prompt("ur age?");

let welcome = (age < 18) ? () => alert("ur are welome"):
() => alert("u r not are welome");

welcome();

let num = (a, b) => {
    let c = a;
    a = b;
    b = c;
    console.log(a + " " + b);
};

num(2,5);
//https://javascript.info/arrow-functions-basics
