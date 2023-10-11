// add7 fun 
let add7 = (a) => a + 7;

console.log(add7(45));

//multiply
let multiply = (a,b) => a * b;

console.log(multiply(3,56));

//capt
let capt = (str) => {
    str = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    console.log(str);
};

capt("hahJKL");

// return last char

let last = (str) => {
    return str.charAt(str.length - 1);
}
console.log(last("jklmkjhfkhgklshfkljghsjklfhgkjH")); // Output: "H"
