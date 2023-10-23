const numbers = [1,2,3,4];
const newArray = [];

function removeFromArray(){
    numbers.filter((value, index) => {
        if(index !== 2){
            console.log(value);
            newArray.push(value);
        }
    })

    return newArray;
}

console.log(newArray);

module.exports = removeFromArray;