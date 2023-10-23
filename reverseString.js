// const reverseString = function(string) {
//     return string.split("").reverse().join("");
// };

// // Do not edit below this line
// module.exports = reverseString;

function rS(string){
    let splitedString = string.split(" ");
    console.log(splitedString);

    let reversedS = splitedString.reverse();
    console.log(reversedS);

    let joinedS = reversedS.join(" ");
    console.log(joinedS);
}

rS("hi how are you");