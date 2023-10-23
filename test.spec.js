const { repeatString, sum } = require("./sum");
const reverseString = require("./reverseString");
const removeFromArray = require("./removeFromArray");
const sumAll = require("./sumAll");
const leapYears = require("./leapYears");
const temp = require("./temp");

test('adds', () => {
    expect(sum(1,2)).toBe(3)
})

test('adds', () => {
    expect(sum(67,2)).toBe(69)
})

test(`string with 2 peras`, () => {
    expect(repeatString("hi ", 3)).toBe("hi hi hi ")
})


// test(`string test with random words`, function () {
//     const number = Math.floor(Math.random() * 100);

//     expect(repeatString('hey', number).match(/((hey))/g).length).toEqual(
//         number
//       );
// })

// test(`r string`, () => {
//     expect(reverseString("hi")).toBe("ih");
// })

test('remove an element from array', () => {
    expect(removeFromArray()).toEqual([1,2,4]);
})

test(`sum all...`, () => {
    expect(sumAll(35,"kk")).toEqual("error");
})

test(`leap year`, () => {
    expect(leapYears(1985)).toEqual(false);
})

test(` fahrenheit to C`, () => {
    expect(temp(32)).toEqual(0);
})