function sumAll(n1, n2){
    if(!Number.isInteger(n1) || !Number.isInteger(n2)) return "error";

    if(n1 > n2){
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }

    let sum = 0;
    for(let i = n1; i <= n2; i++){
        sum += i;
    }

    return sum;
}

module.exports = sumAll;