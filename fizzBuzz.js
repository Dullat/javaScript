let num = prompt("enter a number");

for (let i = 1; i < num; i++) {

    let out = "";

    if ( i % 3 === 0 ) {
        out = "fizz";
    }

    if ( i % 5 === 0 ) {
        out += "buzz";
    }

    console.log(out || i);
}
