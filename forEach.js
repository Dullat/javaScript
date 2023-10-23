const sumArray = function (array) {
    let sum = 0;
    array.forEach(function (n) {
      sum += n;
    });
    return sum;
  };
  
  console.log(sumArray([2, 2, 2]));