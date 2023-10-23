function sum(a,b){
    a += b;
    return a;
};

function repeatString(word, number){
    let string = "";
    for(let i = 0; i < number; i++){
        string += word;
    }

    return string;
};

module.exports = { sum, repeatString };