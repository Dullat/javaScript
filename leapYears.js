function leapYears(year) {
    if((year % 4) == 0){
        if((year % 100) == 0){
            if((year % 400) !== 0){
                return false;
            }else return true;
        }else return true;

    }else return false;
}

module.exports = leapYears;


// return year % 4 === 0 &&  (year % 100 !== 0) || (year % 400 === 0);